var app=require('./server');
require('./middleware/appmiddleware')(app);

var config=require('./config/config');
app.listen(process.env.PORT);