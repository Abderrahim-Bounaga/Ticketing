const Assigntemant = require('../models/Assign');
const Ticket = require('../models/Ticket');


exports.craeteAssign = async (req,res,next)=>{
    const IdUsers =await Ticket.findById({_id: req.params.id})
    if(!IdUsers){
        res.status(500).json({msg :"Ticket Not Found"})
    }
    console.log(IdUsers)
    const assign = new Assigntemant({ ...req.body})
    assign.ticket_Id = req.params.id;
    assign.user_Id = IdUsers.user_Id;
    const saveAssign = assign.save();
  if (saveAssign) return res.status(201).json({ msg: 'Saved',  saveAssign });

}