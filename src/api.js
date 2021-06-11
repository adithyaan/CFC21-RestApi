var express = require('express');
var router = express.Router();
var userRouter = require('./users/userroutes');

router.use('/users',userRouter);

module.exports=router;