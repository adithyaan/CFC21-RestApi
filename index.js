var app=require('./src/server');
require('./src/middleware/appmiddleware')(app);
require('dotenv').config();

app.listen(process.env.PORT,()=>{

  console.log("listening",process.env.PORT)
});