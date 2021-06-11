var mongoose=require('mongoose');


var UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});



UserSchema.pre('save',function(next){
    console.log("pre"+this.password)
    var password=bcrypt.hashSync(this.password,10);
    this.password=password;
    next();
})


var model=mongoose.model('user',UserSchema);

module.exports = model;