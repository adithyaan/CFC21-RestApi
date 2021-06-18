var mongoose=require('mongoose');

var UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        requried:true
    },
    mobileno:{
        type:Number,
        required:true,
        unique:true
    },
    jwttoken:{
        type:String,
        required:true,
        unique:true
    }
});



// UserSchema.pre('save',function(next){
//     console.log("pre"+this.password)
//     var password=bcrypt.hashSync(this.password,10);
//     this.password=password;
//     next();
// })


var model=mongoose.model('User',UserSchema);

module.exports = model;