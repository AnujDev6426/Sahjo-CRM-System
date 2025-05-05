const {
  registerValidation,
  loginValidation,
} = require("../utils/auth.validation");
const { v4: uuidv4 } = require("uuid");
const { tokenGen } = require("../middlewares/jwt.middleware");
const { User } = require("../models/user.model");
const sendEmail = require("../services/email.service");
const { hashPass, isPassValid } = require("../middlewares/bcrypt.middleware");

const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message.replace(/"/g, " ") });
  }

  const { name, email, mobile, branch, password } = req.body;

  try {
    const emailExists = await User.findOne({
      where: {
        email: email,
      },
    });
    const mobileExists = await User.findOne({
      where: {
        mobile: mobile,
      },
    });
    if (emailExists) {
      return res.status(400).json({ message: "Email already registered!" });
    }
    if (mobileExists) {
      return res
        .status(400)
        .json({ message: "Mobile No. already registered!" });
    }

      const hashedPassword =await hashPass(password);

    const user = new User({
      id: uuidv4(),
      name,
      email,
      mobile,
      branch,
      role: "employee",
      status: "active",
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Internal Server error auth", error: err.message });
  }
};

const login = async (req, res) => {
  const { mobile, password } = req.body;

  if (!mobile || !password) {
    return res
      .status(400)
      .json({ message: "Mobile No. or Password cannot be empty!" });
  }

  const user = await User.findOne({ mobile });
  const isPass = isPassValid(password, user.password);

  try {
    if (mobile == user.mobile && isPass) {
      const token = tokenGen(user.id, user.role);
      try {
        await sendEmail(
          `Sahjo Workspace just got Logged In!`,
          "Someone has logged into the Sahjo Workspace.",
          `<p>Sahjo Workspace got Logged In at: ${new Date().toString()} by User: ${
            user.name
          }</p>`,
          "pkparmeshwar552@gmail.com"
        );

        return res.status(200).json({ success: true, token });
      } catch (emailError) {
        console.error("❌ Error sending email:", emailError);
        return res.status(500).json({
          message: "Login successful but failed to send email notification.",
          error: emailError.message || "Unknown email error",
        });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Invalid Mobile No. or Password!" });
    }
  } catch (error) {
    console.error("❌ Error in login controller:", error);
    return res.status(500).json({
      message: "Internal Server Error while logging in!",
      error: error.message || "Unknown error",
    });
  }
};

module.exports = { login, register };
