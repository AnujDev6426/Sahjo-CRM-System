const { User } = require("../models/user.model");

// Get all users
const Admin_get_users = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Get a single user by ID
const Admin_get_user_by_id = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Update user
const Admin_update_user = async (req, res) => {
    try {
        const { name, mobile, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.update({ name, mobile, password: hashedPassword });
        res.json({ message: 'User updated' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Delete user
const Admin_delete_user = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

module.exports = {
    Admin_delete_user, Admin_get_user_by_id, Admin_get_users, Admin_update_user
}
 
