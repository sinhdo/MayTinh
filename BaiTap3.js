var express =  require('express');
var app = express();
app.listen(process.env.PORT||'8000');
var expressHbs = require('express-handlebars');
app.engine('handlebars',expressHbs.engine());
app.set('view engine','handlebars');

app.get('/',function(req,res){
    res.send("Hello World");
});
app.get('/abc',function(req,res){
    res.render('baitho/tho');
});