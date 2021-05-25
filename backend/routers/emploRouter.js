const express = require('express');
const router = express.Router();
const {addEmpl,loginEmpl,getEmplo, getOneEmplo} = require('../controllers/createEmplo');
const {auth} = require('../middleware/vrifytToken')


router.get('/getemploy', getEmplo)
router.get('/getOneemploy', getOneEmplo)
router.post('/register', addEmpl);
router.post('/login', loginEmpl);

module.exports = router;