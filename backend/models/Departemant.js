const mongoose = require('mongoose');

const DepartemantSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        
    },
    Responsable:{
        type:String,
        required:true,
        
    },
    activite:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Departemant', DepartemantSchema);