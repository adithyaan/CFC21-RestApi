var express=require('express');
var router=express.Router();
var controller=require('./usercontroller');

router.post('/register',function(req,res){

    res.send("Hello");
    // controller.register(req,res);
 
});

router.post('/login',function(req,res){
    // controller.login(req,res)
})

router.post('/sendOTP',function(req,res){
    // controller.login(req,res)
})
module.exports=router;