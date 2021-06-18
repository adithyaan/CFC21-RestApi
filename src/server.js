var express=require('express');
var app=express();
var apirouter=require('./api');
require('dotenv').config();

const mongoose=require('mongoose');

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true,useUnifiedTopology: true},
    ()=>console.log("Connected to Db"))
    

app.get('/test',function(req,res){
    res.send("test")
})
app.use('/api',apirouter);
app.use(express.urlencoded({extended:true}));
app.use(express.json());

module.exports=app;