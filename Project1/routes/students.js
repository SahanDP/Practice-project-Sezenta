const express = require('express');
const students = require('../models/students');

const Students = require('../models/students');

const router = express.Router();

//Save a student
router.post('/student/save', (req,res)=>{
    let newStudent = new Students(req.body);

    newStudent.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }else{
            return res.status(200).json({
                success:"Student saved successfully"
            });
        }
    });
});

//Get a student
router.get('/student/get', (req,res)=>{
    Students.find().exec((err,students)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }else{
            return res.status(200).json({
                success:true,
                existingStudents:students
            });
        }
    });
});

//Update a student
router.put('student/update/:id', (req,res)=>{
    Students.findByIdAndUpdate(req.params.id, {
        $set:req.body
    });
});

module.exports = router;