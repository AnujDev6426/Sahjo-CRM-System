const express = require('express');
const router = express.Router();
const { addBranch, getAllBranches , branchById} = require('../../controllers/Admin Controllers/branch.controller')

router.post('/add_branch', addBranch);
router.post('/get_all_branches', getAllBranches);
router.post('/get_branch_by_id', branchById);





module.exports = router;