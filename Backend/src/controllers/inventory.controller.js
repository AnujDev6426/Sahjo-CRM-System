const Inventory = require('../models/inventory');

// Create a new inventory record
const createInventory = async (req, res) => {
    try {
        const isArray = Array.isArray(req.body);

        if (isArray) {
            await Inventory.bulkCreate(req.body);
            res.status(201).json({ message: 'Multiple inventory records added successfully!' });
        } else {
            await Inventory.create(req.body);
            res.status(201).json({ message: 'New Stock has been added!' });
        }
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                message: "GR Number already exists. Please use a unique GR Number.",
            });
        }
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
    try {
        const inventory = await Inventory.findByPk(req.params.id);
        if (!inventory) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an inventory record by ID
const updateInventory = async (req, res) => {
    try {
        const [updated] = await Inventory.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) return res.status(404).json({ message: 'Record not found' });
        const updatedInventory = await Inventory.findByPk(req.params.id);
        res.status(200).json(updatedInventory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an inventory record by ID
const deleteInventory = async (req, res) => {
    try {
        const deleted = await Inventory.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ message: 'Record not found' });
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message , message:'Internal Server Error in Inventory!'});
    }
};

module.exports = { createInventory, getAllInventory, getInventoryById, updateInventory, deleteInventory };
