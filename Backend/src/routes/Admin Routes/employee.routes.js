const express = require('express');
const router = express.Router();
const { register, updateEmp, empById, removeEmployee, getAllEmployees } = require('../../controllers/Admin Controllers/employee.controller');


router.post('/register', register);
router.post('/update_emp', updateEmp);
router.post('/get_emp_by_id', empById);
router.post('/remove_emp', removeEmployee);
router.post('/get_all_emp', getAllEmployees);

module.exports = router;