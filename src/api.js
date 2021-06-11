var express = require('express');
var router = express.Router();
var userRouter = require('./component/users/userroutes');

router.use('/users',userRouter);

module.exports=router;