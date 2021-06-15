var otpmodel=require('./usermodel');
var jwt=require('jsonwebtoken');
const User=require('./usermodel')
const axios = require('axios');

// exports.register=function(req,res,next){
//     const body=req.body;
//     if(typeof(body.username) === undefined || typeof(body.password) === undefined || typeof(body.email) === undefined || typeof(body.phonenumber) === undefined ){
//         console.log(typeof(body.username)===undefined)
//         res.send({message:"please pass credentials"})
//     }

//     else{
//         console.log("in");

//         model.create(req.body,function(err,docs){
//         if(err){
//             res.send(err);
//             console.log("if");
//         }
//         else{
//             console.log("sfd"+docs._id)
//             var id=docs._id;
//             var token=jwt.sign({id:id},config.secret,{expiresIn: config.expireTime})
//             res.json({user:docs,token:token});
//         }
//         });
//     }
// }

// exports.login = function(req,res){
//     var email = req.body.email;
//     if(!email|| !password){
//         res.json({message:"please pass credentials"})
//     }
//     else{
//     model.findOne({email:email},function(err,userInfo){
//         if(err){
//             res.json("error");
//         }
//         else{
//             if(!userInfo){
//                 res.json({message:"No user available with the id"})
//             }
//             else{
//                 if(bcrypt.compareSync(password, userInfo.password)){
//                 var token=jwt.sign({id:userInfo._id},config.secret,{expiresIn: config.expireTime})
//                 res.json({token:token});
//                 }
//                 else{
//                     res.json({message:"username or password is incorrect"});
                    
//                 }
//             }
//         }
//     })
// }
// }

async function generateOTP(mobileno) {
    let req = await axios({
        method: 'get',
        url: 'http://2factor.in/API/V1/5e1816fb-a5b0-11e6-a40f-00163ef91450/SMS/'+mobileno+'/AUTOGEN'
    });
  
    let response = req.data;
    return response;
  }

  async function verify(sessionId,otp) {
    let req = await axios({
        method: 'get',
        url: 'https://2factor.in/API/V1/5e1816fb-a5b0-11e6-a40f-00163ef91450/SMS/VERIFY/'+sessionId+'/'+otp
    });
  
    let response = req.data;
    return response;
  }
  
exports.sendOTP = async function(req,res){
    var mobileno = parseInt(req.params.mobileno);
    if(mobileno==null || mobileno=="" || isNaN(mobileno)){
        res.json({message:"please pass credentials"})
    }
    else{
        let r=await generateOTP(mobileno);
        console.log(r)
        res.json(r);
        }
    }

exports.verifyOTP = async function(req,res){
    var mobileno = parseInt(req.params.mobileno);
    var sessionId=(req.params.sessionId).toString();
    var otp=(req.params.otp).toString();
    console.log(sessionId,otp)
    try{
        let r=await verify(sessionId,otp);
        console.log(r)
        if(r.Details=="OTP Matched"){
            
            res.json(r);
        }
        else{
            res.json(
                { Status: 'Unsuccessfull', Details: 'OTP Did Not Matched' }
            )
        }
        }
        catch(err){
            res.json({message:err})
        }
}
    
exports.register = async function(req,res){
    console.log(req.body)
    const user=new User({
        name:req.body.name,
        dob:req.body.dob,
        gender:req.body.gender,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        usertype:req.body.usertype,
        mobileno:req.body.mobileno,
        jwttoken:jwt.sign({id:req.body.mobileno},'key',{expiresIn: '1d'})
    });
    try{
        const savedUser=await user.save()
        res.json(savedUser);
        }
        catch(err){
            res.json({message:err})
        }
    }

exports.userPresent=async function(mobileno){
    try{
        const user=await User.findById(mobileno);
       console.log(user)
        }
        catch(err){
            console.log(err)
        }
}