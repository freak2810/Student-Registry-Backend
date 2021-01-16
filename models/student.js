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
    year: {
        type: String,
        // required:true,
        enum: ['1', '2', '3', '4']
    },
    class: {
        type: String,
        // required:true,
        enum: ['CSE,IT,ECE']
    },
    section: {
        type: String,
        // required:true,
        enum: ['1', '2', '3']
    },
    email: {
        type: String,
        // required: true
    },
    phone: {
        type: String,
        // required: true
        maxLength: 10
    },
    gender: {
        type: String,
        // required:true,
        enum: ['male', 'female'],
        default: 'male'
    },
    dob: {
        type: Date
        // required:true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

module.exports = mongoose.model('Student', studentSchema);