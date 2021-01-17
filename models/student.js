const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
         required: true
    },
    phone: {
        type: String,
        required: true,
        maxLength: 10
    },
    year: {
        type: String,
        enum: ['1', '2', '3', '4'],
        default: '4',
    },
    branch: {
        type: String,
        enum: ['CSE,IT,ECE'],
        default: 'CSE'
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

module.exports = mongoose.model('Student', studentSchema);