const {
  registerValidation,
  updateEmpValidation,
} = require("../../utils/admin.validations");
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

    await sendEmail(
      "Employee Registration Notification",
      "You have just registered a new Employee",
      `<h1 style="text-align : center; color:##7cfc00">Employee Registered</h1><ul><li>Employee :<b> ${name}</b></li> <li>Time :<b> ${new Date().toLocaleString()}</b></li></ul>`,
      `anujkumawat878@gmail.com`
    );

  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({
      message: "Internal Server Error during registration",
      error: err.message,
    });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employees.findAll();

    const data = allEmployees.map((employee) => employee.get({ plain: true }));

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.log("Error in getting Employees", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error while getting Employees",
        error,
      });
  }
};

const empById = async (req, res) => {
  const { emp_id } = req.body;

  if (!emp_id) {
    return res
      .status(400)
      .json({ success: false, message: "emp_id is required" });
  }
  try {
    const employee = await Employees.findByPk(emp_id);

    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found!" });
    }

    const data = employee.get({ plain: true });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.log("error getting Employee by Id", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error while getting Employee by Id!",
      });
  }
};

const updateEmp = async (req, res) => {
  const { error } = updateEmpValidation(req.body);
  if (error) {
    return res
      .status(400)
      .json({
        success: false,
        message: error.details[0].message.replace(/"/g, " "),
      });
  }

  const { emp_id, name, email,role, password, phone, branch_id } = req.body;
  if (!emp_id) {
    return res
      .status(400)
      .json({ success: false, message: "emp_id is required!" });
  }

  try {
    const hash =await hashPass(password);
    // console.log(hash)

    const employee = await Employees.findByPk(emp_id);
    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.phone = phone || employee.phone;
    employee.role = role || employee.role;
    employee.branch_id = branch_id || employee.branch_id;
    employee.password = hash || employee.password;

    await employee.save()

    res.status(200).json({success:true, message:"Employee details have been updated!"})

    await sendEmail(
      "Employee Details Update Notification",
      "You have just updated a Employee's Details",
      `<h1 style="text-align : center; color:#ffff00">Employee Updated</h1><ul><li>Employee :<b> ${employee.name}</b></li> <li>Time :<b> ${new Date().toLocaleString()}</b></li></ul>`,
      `anujkumawat878@gmail.com`
    );

    return;
  } catch (error) {
    console.log("error while updating the employee", error.message);
  }
};

const removeEmployee = async (req, res) => {
  const { emp_id } = req.body;

  if (!emp_id) {
    return res
      .status(400)
      .json({ success: false, message: "emp_id is required" });
  }

  try {
    const employee = await Employees.findByPk(emp_id);

    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }
    employee.destroy();

    res.status(200).json({ success: true, message: "Employee terminated successfully!" })

    await sendEmail(
      "Employee Termination Notification",
      "You have just Terminated an Employee",
      `<h2 style="text-align : center; color:red">Employee Terminated</h2><ul><li>Employee :<b> ${employee.name}</b></li> <li>Time :<b> ${new Date().toLocaleString()}</b></li></ul>`,
      `anujkumawat878@gmail.com`
    );

    return;
  } catch (error) {
    console.error("Error while removing the Employee:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while removing the Employee",
    });
  }
};

module.exports = {
  register,
  getAllEmployees,
  empById,
  removeEmployee,
  updateEmp,
};
