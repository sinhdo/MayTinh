var express =  require('express');
var app = express();
app.listen(process.env.PORT||'3000');
var expressHbs = require('express-handlebars');
app.engine('handlebars',expressHbs.engine());
app.set('view engine','handlebars');

app.get('/',function(req,res){
    res.send("Hello World abc");
});
app.get('/handlebars',function(req,res){
    res.render('layouts/main');
});