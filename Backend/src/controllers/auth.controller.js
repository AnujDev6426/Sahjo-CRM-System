const {registerValidation, loginValidation} = require('../utils/auth.validation') 
const bcrypt = require('bcrypt');
const { v4 : uuidv4 } = require('uuid');
const {sequelize} = require('../config/db')
const { User } = require('../models/user.model');
const sendEmail = require('../services/email.service')



const register = async (req, res) => {

    await sequelize.sync({ force: false });
 
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message.replace(/"/g, " ") });
    }

    const { name, email, mobile, password } = req.body;

    try {
      const emailExists =await User.findOne({
            where: {
                email: email 
            }
        });
        const mobileExists = await User.findOne({
            where: {
                mobile: mobile
            }
});
        if (emailExists) {
            return res.status(400).json({ message: "Email already registered!" });
        }
        if (mobileExists) {
            return res.status(400).json({ message: "Mobile No. already registered!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            id:uuidv4(),
            name,
            email,
            mobile,
            status:'active',
            password: hashedPassword
        });

        const savedUser = await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server error", error: err.message });
    }
};


const verifyOtp = async (req, res) => {
    const { email, mobile } = req.body;
    try {

        const emailExists = await User.findOne({
            where: {
                email: email
            }
        });
        const mobileExists = await User.findOne({
            where: {
                mobile: mobile
            }
        });
        if (emailExists) {
            return res.status(400).json({ message: "Email already registered!" });
        }
        if (mobileExists) {
            return res.status(400).json({ message: "Mobile No. already registered!" });
        }

        const otpGen = () => {
            return Math.ceil(Math.random()*900000) + 100000
        }

        
        
        // await sendEmail(
        //     `Verify OTP for Registeration!`,
        //     "Use below OTP for registration",
        //     `<p>Use the below OTP for Verification : <b>${newOtp}</b></p>`,
        //     email
        // );
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error:error.message
        })
    }
}





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
                    `Sahjo CRM just got Logged In!`,
                    "Someone has logged into the Sahjo System.",
                    `<p>Sahjo CRM got Logged In at: ${ new Date().toString() }</p>`,
                    "pkparmeshwar552@gmail.com"
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

module.exports = { login, register, verifyOtp }