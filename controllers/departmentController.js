

const Department = require('../models/Departments');



const createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;
        const department = new Department({ name, description });
        await department.save();
        res.status(201).json(department);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




module.exports = {
    createDepartment,
    getAllDepartments
};