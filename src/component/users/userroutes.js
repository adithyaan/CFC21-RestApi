var express=require('express');
var router=express.Router();
var controller=require('./usercontroller');
const bodyParser=require('body-parser')


router.use(bodyParser.json());
router.get('/',function(req,res){
res.send("Hello")
    // controller.register(req,res);
});

router.get('/verifyOTP/',function(req,res){
    controller.verifyOTP(req,res)
})

router.get('/sendOTP/',function(req,res){
    console.log("test",req.query.mobileno)
    controller.sendOTP(req,res)
})

router.post('/register/',function(req,res){
    controller.register(req,res)
})
module.exports=router;