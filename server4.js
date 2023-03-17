const express = require('express')
const app = express()
const port = 3000
var tinh = require('./maytinh');

const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'page2',
    //layoutsDir: "views/layouts/",
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home', {
        layout: 'page3',
    })
});

app.get('/maytinh', (req, res) => {
  var so1 = req.query.so1;
  var so2 = req.query.so2;
  var dau = req.query.dau;
  var kq = 0;

  if (dau == '+') {
    kq = tinh.add(parseFloat(so1), parseFloat(so2));
  } else if (dau == '-') {
    kq = tinh.subtract(parseFloat(so1), parseFloat(so2));
  } else if (dau == 'x') {
    kq = tinh.multiply(parseFloat(so1), parseFloat(so2));
  } else if (dau == '/') {
    if (so2 == 0) {
      res.send('Số B phải khác 0, Vui lòng nhập lại !');
    } else {
      kq = tinh.chia(parseFloat(so1), parseFloat(so2));
    }
  } 
    res.render('defaultView', {
        layout: 'page3',
        kq,so1,so2,dau,
    })
});
// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});