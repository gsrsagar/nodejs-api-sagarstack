
const { createDepartment, getAllDepartments } = require('../controllers/departmentController');


const express = require('express');
const router = express.Router();


router.post('/departments', createDepartment);
router.get('/departments', getAllDepartments);

module.exports = router
