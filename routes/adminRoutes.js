const adminController = require('../controllers/admin');
const router = require('express').Router();

router.get('/students', adminController.getStudents);

router.get('/student/:id', adminController.getStudent);

router.get('/student/rollNo/:rollNo', adminController.getStudentByRollNo);

router.post('/student', adminController.postStudent);

router.put('/student/rollNo/:rollNo', adminController.putStudent);

router.delete('/student/rollNo/:rollNo', adminController.deleteStudent);

module.exports = router;