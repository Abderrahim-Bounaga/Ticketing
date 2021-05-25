const express = require('express');
const router = express.Router();
const {addDepart} = require('../controllers/createDepar')

router.post('/register', addDepart);

module.exports = router 