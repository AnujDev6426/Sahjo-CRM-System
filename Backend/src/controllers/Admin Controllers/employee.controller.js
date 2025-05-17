const { registerValidation } = require("../../utils/admin.validations");
const { v4: uuidv4 } = require("uuid");
const { Employees } = require("../../models/employees");
const sendEmail = require("../../services/email.service");
const { hashPass } = require("../../middlewares/bcrypt.middleware");

const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message.replace(/"/g, " ") });
  }

  const { name, email, phone, branch_id, password } = req.body;

  try {
    const emailExists = await Employees.findOne({ where: { email } });
    const phoneExists = await Employees.findOne({ where: { phone } });

    if (emailExists) {
      return res.status(400).json({ message: "Email already registered!" });
    }
    if (phoneExists) {
      return res.status(400).json({ message: "Phone already registered!" });
    }

    const hashedPassword = await hashPass(password);

    const user = await Employees.create({
      emp_id: uuidv4(),
      name,
      email,
      phone,
      password: hashedPassword,
      branch_id,
      role: "employee",
      status: "active",
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({
      message: "Internal Server Error during registration",
      error: err.message,
    });
  }
};

module.exports = {register}
