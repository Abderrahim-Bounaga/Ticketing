const express = require('express');
const router = express.Router();
const {addTecket} = require('../controllers/createTicket')


router.post('/register', addTecket);


module.exports = router 