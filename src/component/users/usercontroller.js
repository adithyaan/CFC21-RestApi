// var model=require('./usermodel');
// var jwt=require('jsonwebtoken');
// var config=require('../config/config');


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

// exports.sendOTP = function(req,res){
//     var mobileno = parseInt(req.body.mobileno);
//     if(!mobileno==null || !mobileno=="" || isNaN(mobileno)){
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