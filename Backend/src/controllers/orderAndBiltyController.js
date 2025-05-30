const { Inventory } = require('../models/inventory');
const { Orders } = require('../models/orders');
const { v4: uuidv4 } = require("uuid");
const { orderValidation } = require('../utils/order.validation');


const getBilty = async (req, res) => {
    const { id } = req.body;
// console.log(id)
    try {

        const inventory = await Inventory.findByPk(id)
        // console.log(inventory)
        if (!inventory) {
            return res.status(404).json({ message: "Inventory not found while generating bill!" });
        }

        
        if(!inventory.isBilty) {
            inventory.isBilty = true
            
            await inventory.save()
        }
        
        return res.status(200).json({success:true, message:"Bilty Generated Successfully!", data: inventory})
        
        
        
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error while generating the bill!'})
    }
}


const createOrder = async (req, res) => {
    const { error } = orderValidation(req.body);
    if (error) {
        return res.status(400).json({ success: false, message:error.details[0].message.replace(/"/g, " ") })
    }


    const { id, transfer_type, order_status } = req.body;

    try {

        const inventory = await Inventory.findByPk(id);
        if (!inventory) {
            return res.status(404).json({ success: false, message: 'Inventory not found while creating order!' })
        }

        if (!inventory.isBilty) {
            return res.status(400).json({message:'Cannot create order without generating the bilty!'})
        }

        if(!inventory.isOrdered) {
            inventory.isOrdered = true;
            await inventory.save();
        }

        const order = await Orders.create({
            inventory_id: inventory.id,
            order_id: uuidv4(),
            transfer_type: transfer_type,
            order_status: order_status
        })

        return res.status(200).json({success:true, message:"Order created successfully!"})

    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error while creating order!'})
    }
}


const updateOrder = async (req, res) => {

    const { error } = orderValidation(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message.replace(/"/g, " ") })
    }
    const { order_id, transfer_type, order_status } = req.body;

    try {
        const order = await Orders.findByPk(order_id);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found while updating!' })
        }

        order.transfer_type = transfer_type;
        order.order_status = order_status;

        await order.save();

        return res.status(200).json({success:true, message:'Order updated successfully!'})
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error while updating the order!'})
    }
}





module.exports = { getBilty, createOrder, updateOrder }