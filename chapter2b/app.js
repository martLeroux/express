var express = require("express");
var router = require('./index.js');
var app = express(); //start the express app

app.use('/', router);
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000, function(){
    console.log('Express app running');
});