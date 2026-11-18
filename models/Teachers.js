const mongoose = require('mongoose');


const teachersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
});

module.exports = mongoose.models.Teacher || mongoose.model("Teacher", teachersSchema);