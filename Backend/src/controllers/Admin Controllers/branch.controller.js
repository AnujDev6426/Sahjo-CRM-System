const { branchValidation } = require('../../utils/admin.validations');
const { v4: uuidv4 } = require("uuid");
const { Branches } = require('../../models/branches')

const addBranch = async (req, res) => {
    const { error } = branchValidation(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message.replace(/"/g, " ") });
    }

    const { name, building, street, city, country, pincode } = req.body;


    try {

        await Branches.create({
            branch_id: uuidv4(),
            name,
            address: {
                building,
                street,
                city,
                country,
                pincode
            }
        });

        return res.status(200).json({ success: true, message: 'Branch added successfully!' })


    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error while adding branch!', error });
    }

}

const getAllBranches = async (req, res) => {
    try {
        const allBranches = await Branches.findAll();

        const data = allBranches.map((branch) => new Object({branch_id:branch.branch_id,name:branch.name,address:JSON.parse(branch.address) }));

        return res.status(200).json({ success: true, data: data });
    } catch (error) {
        console.log('Error in getting Branches', error)
        return res.status(500).json({ success: false, message: "Internal Server Error while getting Branches", error });
    }
}

const branchById = async (req, res) => {
    const { branch_id } = req.body;

    if (!branch_id) {
        return res.status(400).json({ success: false, message: 'branch_id is required' });
    }
    try {
        
        const branch = await Branches.findByPk(branch_id);
 
        if (!branch) {
            return res.status(404).json({success:false, message:"Branch not found!"})
        }

        const data = new Object({ branch_id: branch.branch_id, name: branch.name, address: JSON.parse(branch.address) })

        return res.status(200).json({ success: true, data });

    } catch (error) {
        console.log('error getting branch by Id', error);
        return res.status(500).json({success:false, message:'Internal Server Error while getting branch by Id!'})
    }
}

// const deleteBranch = async (req, res) => {
//     const { branch_id } = req.body;

//     if (!branch_id) {
//         return res.status(400).json({ success: false, message: 'branch_id is required' });
//     }

//     try {
//         const branch = await Branches.findByPk(branch_id);

//         if (!branch) {
//             return res.status(404).json({ success: false, message: 'Branch not found' });
//         }
//         await branch.destroy();

//         return res.status(200).json({ success: true, message: 'Branch deleted successfully' });

//     } catch (error) {
//         console.error('Error while deleting the branch:', error);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal Server Error while deleting the branch'
//         });
//     }
// };





module.exports = { addBranch, getAllBranches, branchById }
