// const { User } = require('../models/user.model');
  
// // Get a single user by ID
// const get_user_by_id = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// };
  
// // Update user
// const update_user = async (req, res) => {
//     try {
//         const { name, mobile, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await User.findByPk(req.params.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });
  
//         await user.update({ name, mobile, password: hashedPassword });
//         res.json({ message: 'User updated' });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// };