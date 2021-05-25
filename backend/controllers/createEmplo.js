const Employe = require('../models/Employe');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: '../config/.env' });

exports.addEmpl=async (req,res,next)=>{
    const EmployeExist = await Employe.findOne({ email: req.body.email });
    if (EmployeExist) return res.status(400).json(`${req.body.email} existant`);
    const employe =new Employe({ ...req.body })
    const hashedpassword = await bcrypt.hash(req.body.password, 12);
    employe.password = hashedpassword;
    const saveEmploye = employe.save();
  if (saveEmploye) return res.status(201).json({msg: saveEmploye});
}


exports.loginEmpl = async (req, res) => {

  const user = await Employe.findOne({ email: req.body.email });

  if (
    !user ||
    !(await bcrypt.compare(req.body.password, user.password))
  )
    return res.status(400).json('identifiant ou password incorect');

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.SECRET_TOKEN,
    {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    }
  );
  return res
    .status(200)
    .cookie('token', token, {
      httpOnly: true,
    })
    .json({ isAuth: true, role: user.role });
};

exports.getEmplo = function(req,res,next) {
  Employe.find({})
    .then((Particip) =>{
      res.statusCode = 200;
      res.json(Particip)})
      .catch((err) => {console.log(err)})
}
exports.getOneEmplo = (req,res,next) =>{
  const token = req.cookies.token;
  console.log(token)
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedtoken) => {
      if (!err ) {
        res.User = await Employe.findOne({ _id: decodedtoken.id });
        console.log(res.User)
        if(res.User)return res.status(200).json(res.User)
        return res.status(500).json({msg:" employee is not correct"})
      }

    })
  }
}