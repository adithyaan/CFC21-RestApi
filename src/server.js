var express=require('express');
var app=express();
var apirouter=require('./api');

// mongoose.connect(process.env.DB_CONNECTION,
//     {useNewUrlParser:true},
//     ()=>console.log("Connected to Db"))
    

app.get('/test',function(req,res){
    res.send("test")
})
app.use('/api',apirouter);

module.exports=app;