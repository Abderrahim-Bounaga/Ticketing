const Departemant = require('../models/Departemant');
// const bcrypt = require('bcryptjs');


exports.addDepart=async (req,res,next)=>{
    const DepartemantExist = await Departemant.findOne({ name: req.body.name });
    if (DepartemantExist) return res.status(400).json(`${req.body.name} existant`);
    const departemant =new Departemant({ ...req.body })
    const saveDepartemant = departemant.save();
  if (saveDepartemant) return res.status(201).json('loged');
} 