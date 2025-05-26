const { Inventory } = require('../models/inventory');
const {v4:uuidv4} = require('uuid');
const { inventoryValidation } = require('../utils/inventory.validation');

// Create a new inventory record
const createInventory = async (req, res) => {
    const { error } = inventoryValidation(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message.replace(/"/g, " ") })
    }

    try {
        const { grNo, ...data } = req.body;
        // console.log(grNo)
        const invent = await Inventory.findOne({ where: {grNo:grNo} });
        // console.log(invent)
        if (invent) {
            return res.status(400).json({success:false, message:'GR number is already in use.'})
        }
        await Inventory.create({
            id: uuidv4(),
            grNo, 
            ...data
        });
        res.status(201).json({ message: 'New Stock has been added!' });
    
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message, message:'Error Adding Stock!' });
    }
};

// Get all inventory records
const getAllInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single inventory record by ID
const getInventoryById = async (req, res) => {
    const { id } = req.body;
    try {
        const inventory = await Inventory.findByPk(id);
        if (!inventory) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an inventory record by ID
// const updateInventory = async (req, res) => {
//     try {
//         const [updated] = await Inventory.update(req.body, {
//             where: { id: req.params.id }
//         });
//         if (!updated) return res.status(404).json({ message: 'Record not found' });
//         const updatedInventory = await Inventory.findByPk(req.params.id);
//         res.status(200).json(updatedInventory);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // Delete an inventory record by ID
// const deleteInventory = async (req, res) => {
//     try {
//         const deleted = await Inventory.destroy({ where: { id: req.params.id } });
//         if (!deleted) return res.status(404).json({ message: 'Record not found' });
//         res.status(200).json({ message: 'Record deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message , message:'Internal Server Error in Inventory!'});
//     }
// };

module.exports = { createInventory, getAllInventory, getInventoryById};
