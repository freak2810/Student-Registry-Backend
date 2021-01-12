const Student = require('../models/student');

exports.getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200)
            .json(students);
    } catch (err) {
        res.status(500)
            .json({message: err.message});
    }
};

exports.getStudentByRollNo = async (req, res, next) => {
    const rollNo = req.params.rollNo;

    try {
        const student = await Student.findOne({rollNo: rollNo});

        if (!student)
            return res.status(404)
                .json({message: `Student with rollNo --> ${rollNo} is not found`})

        res.status(200).json(student);
    } catch (err) {
        res.status(500)
            .json({message: err.message});
    }
};

exports.getStudent = async (req, res, next) => {
    const id = req.params.id;

    try {
        const student = await Student.findById(id);

        if (!student)
            return res.status(404)
                .json({message: `Student with id --> ${id} is not found`});

        res.status(200).json(student);
    } catch (err) {
        res.status(500)
            .json({message: err.message});
    }
};

exports.postStudent = async (req, res, next) => {
    const name = req.body.name;
    const rollNo = req.body.rollNo;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const dob = req.body.dob;

    try {

        const presentStudent = await Student.findOne({rollNo: rollNo})

        if (presentStudent) {
            return res.status(409).json({message: `Student with roll no --> ${rollNo} already exists`})
        }

        const student = await new Student({
            name: name,
            rollNo: rollNo,
            email: email,
            phone: phone,
            gender: gender,
            dob: dob
        }).save();

        res.status(201).json(student);
    } catch (err) {
        res.status(500)
            .json({message: err.message});
    }
};

exports.putStudent = async (req, res, next) => {

    const rollNo = req.params.rollNo;

    try {

        const student = await Student.findOne({rollNo: rollNo});

        if (!student) {
            return res.status(404).send({message: `Student with rollNo --> ${rollNo} is not found`})
        }

         student.name = req.body.name || student.name;
         student.rollNo = req.body.rollNo || student.rollNo;
         student.email = req.body.email || student.email;
         student.phone = req.body.phone || student.phone;
         student.gender = req.body.gender || student.gender;

        await student.save()

        res.json(student);

    } catch (err) {
        res.status(500)
            .json({message: err.message});
    }







}

exports.deleteStudent = async (req, res, next) => {
    const rollNo = req.params.rollNo;

    if (!rollNo) {
        return res.status(400).send({message: `Please Enter a valid Roll No`})
    }

    const student = await Student.findOne({rollNo: rollNo});

    if (!student) {
        return res.status(404).send({message: `Student with rollNo --> ${rollNo} is not found`})
    }

    await Student.deleteOne({rollNo: rollNo})

    res.status(204).json({message: `Student with rollNo --> ${rollNo} is Deleted`});
}