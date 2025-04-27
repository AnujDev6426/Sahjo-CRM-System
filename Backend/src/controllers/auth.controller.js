const {registerValidation, loginValidation} = require('../utils/auth.validation') 
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');
const  sendEmail  = require('../services/email.service')



const register = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message.replace(/"/g, " ") });
    }

    const { email, password, name, mobile } = req.body;

    try {
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            mobile,
            password: hashedPassword
        });

        const savedUser = await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server error", error: err.message });
    }
};


const login = async (req, res) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ message: 'Username or Password cannot be empty!' });
    }

    try {
        if (userName == process.env.ADMIN_NAME && password == process.env.ADMIN_PASS) {

            console.log(`Admin login attempt at ${new Date().toString()}`);

            try {
                await sendEmail(
                    `Sahjo CRM got Logged In`,
                    "Someone has logged into the Sahjo System.",
                    `<p>Sahjo CRM got Logged In at: ${ new Date().toString() }</p>`,
                    "kumawatdeepak8502@gmail.com"
                );
            } catch (emailError) {
                console.error("❌ Error sending email:", emailError);
                return res.status(500).json({
                    message: 'Login successful but failed to send email notification.',
                    error: emailError.message || 'Unknown email error'
                });
            }

            return res.status(200).json({ message: 'Welcome Admin' });
        } else {
            return res.status(400).json({ message: 'Invalid Username or Password!' });
        }
    } catch (error) {

        console.error("❌ Error in login controller:", error);
        return res.status(500).json({
            message: 'Internal Server Error while logging in!',
            error: error.message || 'Unknown error'
        });
    }
};

module.exports = { login, register }