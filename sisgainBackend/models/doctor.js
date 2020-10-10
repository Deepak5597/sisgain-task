const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
    doctorName: {
        type: String
    },
    role:{
        type: String 
    },
    contact:{
        type: String
    },
    gender:{
        type:String
    },
    email:{
        type: String
    },
    address:{
        type: String
    },
    institute:{
        type: String
    }
});

const Doctors = mongoose.model('Doctors',doctorsSchema);

module.exports = Doctors;

module.exports.getAllDoctors = function(callback){
    Doctors.find(callback);
}

module.exports.getDoctorById = function(doctorId,callback){
    Doctors.findById(doctorId,callback);
}

module.exports.addNewDoctor = function(newDoctor,callback){
    newDoctor.save(newDoctor,callback);
    
}

module.exports.deleteDoctor = function(doctorId,callback){
    Doctors.deleteOne(doctorId,callback);
}