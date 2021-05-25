const mongoose = require('mongoose');

const EmployeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        min:3,
    },
    lastName:{
        type:String,
        required:true,
        min:3
    },
    dateAmbouche:{
        type:Date,
        required:true,
        default: Date.now
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['user', 'admin', 'technicien'],
        default: 'user'
    },
    dep_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Departemant'},

})

module.exports = mongoose.model('Employe', EmployeSchema);