const  mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        min:3,
    },
    type:{
        type:String,
        required:true,
        min:3
    },
    ergence:{
        type: String,
        enum: ['No_urgent', 'Urgent', 'Very_urgent'],
        default: 'No_urgent'
    },
    Description:{
        type:String,
        required:true
    },
    etat:{
        type: String,
        enum: ['Wait', 'Treats', 'Treated'],
        default: 'Wait'
    },
    date:{
        type:String,
        default: Date.now
    },
    user_Id:{type: mongoose.Schema.Types.ObjectId, ref: 'Employe'},

})

module.exports = mongoose.model('Ticket', TicketSchema);