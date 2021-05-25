const mongoose = require('mongoose');
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;
const AssigntSchema = new mongoose.Schema({
    user_Id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employe'},
    ticket_Id: {type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'},
    tech_Id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employe'},
    date:{
        type:Date,
        required:true,
        default:dt
    }
})

module.exports = mongoose.model('Assigntemant', AssigntSchema);