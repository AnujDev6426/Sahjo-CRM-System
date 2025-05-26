const { loginValidation } = require("../utils/auth.validation");
const { tokenGen } = require("../middlewares/jwt.middleware");
const { Employees } = require("../models/employees");
const sendEmail = require("../services/email.service");
const { isPassValid } = require("../middlewares/bcrypt.middleware");
const { Branches } = require("../models/branches");
const {blacklistToken} = require('../middlewares/tokenRevoke')

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message.replace(/"/g, " ") });
  }

  const { phone, password } = req.body;

  try {
    const user = await Employees.findOne({
      where: { phone },
      include: [{ model: Branches, as: "branch" }],
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Phone Number" });
    }
    
    const isPass = await isPassValid(password, user.password);

    if (isPass) {
      const token = tokenGen(user.emp_id, user.role, user.name);

      const admin = await Employees.findOne({
        where: { role: "admin" },
      });

      res.status(200).json({
        success: true,
        message: "Logged in successfully ✅",
        token,
      });

      let userBranch = `${user.toJSON().branch.name} ${
        JSON.parse(user.toJSON().branch.address).city
      }`;

      await sendEmail(
        "Employee Login Notification",
        "Sahjo Workspace just got Logged In!",
        `<p>Sahjo Workspace got Logged In on ${new Date().toLocaleString()} at<b> ${userBranch}</b>  branch by <b>${
          user.toJSON().name
        }</b></p>`,
        `${admin.email}`
      );

      return;
    } else {
      return res.status(400).json({ message: "Invalid Password!" });
    }
  } catch (err) {
    console.error("❌ Login Error:", err);
    return res.status(500).json({
      message: "Internal Server Error during login",
      error: err.message,
    });
  }
};

const logOut = async (req, res, next) => {
    try {
      const authHeader = req.header('Authorization');
      const token = authHeader?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      await blacklistToken(token);

      return res.status(200).json({ message: "Logged Out Successfully" });

    } catch (error) {
      console.error("Logout error:", error);
      return next(new AppError("Error Logging Out", 500));
    }
  };



module.exports = { login,logOut};
