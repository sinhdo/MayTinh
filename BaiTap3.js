const express = require('express')
const app = express()
const port = 3000

const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs.engine({
    extname: "hbs",
    defaultLayout: 'tho',
    //layoutsDir: "views/layouts/",
}));

app.set('view engine', '.hbs');

app.get('/tho', (req, res) => {
    res.render('home', {
        layout: 'tho',
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});