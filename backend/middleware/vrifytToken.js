const jwt = require('jsonwebtoken');
const Employe = require('../models/Employe');

exports.auth = (Role) => (req, res, next) => {
  const  token  = req.cookies.token;
  console.log(token)
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedtoken) => {
      if (!err && decodedtoken.role === Role) {
        res.currentUser = await Employe.findOne({ _id: decodedtoken.id });
        next();
      } else {
        return res
          .clearCookie('token')
          .json({ isAuth: false, role: '', ifError: 'ifError' });
      }
    });
  } else {
    return res.json({ isAuth: false, role: '', ifNotToken: 'ifNotToken' });
  }
};