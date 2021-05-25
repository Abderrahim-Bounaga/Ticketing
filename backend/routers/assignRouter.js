const express = require('express');
const router = express.Router();
const {craeteAssign} = require('../controllers/AssignTeckit')

router.post('/assign/:id',craeteAssign);


module.exports=router;