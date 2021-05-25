const Ticket = require('../models/Ticket');


exports.addTecket=async (req,res,next)=>{
    const Tecket =new Ticket({ ...req.body })
    // Tecket.user_Id = req.params.id;
    const saveTecket = Tecket.save();
  if (saveTecket) return res.status(201).json({ msg: 'Saved',  saveTecket });
}