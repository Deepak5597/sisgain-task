const express = require('express');
const router = express.Router();
const responseObj = require('../models/customresponse');
const Doctors = require('../models/doctor'); 

//to get all doctors
router.get('/',(req,res,next)=>{
    Doctors.getAllDoctors((err,data)=>{
        if(err){
            res.json(responseObj.customResponse('error','500','Something went wrong while getting doctors.',[]))
        }else{
            res.json(responseObj.customResponse('success','200','Doctor Data.',data))
        }
    });
});

//to get individual task by id
router.get('/:doctorId',(req,res,next)=>{
    Doctors.getDoctorById(req.params.doctorId,(err,data)=>{
        if(err){
            res.json(responseObj.customResponse('error','500','Something went wrong while getting Doctor by doctor id'));
        }else{
            res.json(responseObj.customResponse('success','200','Doctor Found',data));
        }
    });
});

//to create a task
router.post('/',(req,res,next)=>{
    let newDoctor = new Doctors({
        doctorName: req.body.doctorName,
        role:req.body.role,
        contact:req.body.contact,
        gender:req.body.gender,
        email:req.body.email,
        address:req.body.address,
        institute: req.body.institute
    })

    Doctors.addNewDoctor(newDoctor,(err,data)=>{
        if(err){
            res.json(responseObj.customResponse('error','500','Something went wrong while adding doctor'));
        }else{
            res.json(responseObj.customResponse('success','200','Doctor Added Successfully',data));
        }
    })
});


module.exports = router;

