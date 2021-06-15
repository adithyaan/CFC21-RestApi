var otpmodel=require('./usermodel');
var jwt=require('jsonwebtoken');
const User=require('./usermodel')
const axios = require('axios');

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

  async function userPresent(req,res,r,mobno){
    try{
        User.find({mobileno:mobno})
        .then(user =>{
            console.log(user)
            if(user.length !== 0){
               r.userPresent="User Present";
               res.json({verify:r});
            }
            else{
                r.userPresent="User is not present please register";
                res.json({verify:r});
            }
        }      
        )
        }
        catch(err){
            console.log(err)
        }
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
            await userPresent(req,res,r,mobileno)
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

