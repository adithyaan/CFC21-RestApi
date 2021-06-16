var express=require('express');
var router=express.Router();
var controller=require('./usercontroller');
const bodyParser=require('body-parser')


router.use(bodyParser.json());
router.get('/',function(req,res){
res.send("Hello")
    // controller.register(req,res);
});

<<<<<<< HEAD
router.get('/verifyOTP/',function(req,res){
    controller.verifyOTP(req,res)
})

router.get('/sendOTP/',function(req,res){
    console.log("test",req.query.mobileno)
=======
router.get('/verifyOTP/:mobileno/:sessionId/:otp',function(req,res){
    controller.verifyOTP(req,res)
})

router.get('/sendOTP/:mobileno',function(req,res){
>>>>>>> 3757a479b717191b9978de7b061aef5f59e9a819
    controller.sendOTP(req,res)
})

router.post('/register/',function(req,res){
    controller.register(req,res)
})
module.exports=router;