var express = require('express')
var app = express()
const dotenv = require('dotenv');
dotenv.config();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})


app.listen(process.env.PORT,()=>{
    console.log(`Your port is ${process.env.PORT}`);
})
