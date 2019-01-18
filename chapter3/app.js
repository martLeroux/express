var express = require("express");
var bodyParser = require("body-parser"); //pour post
var router = require('./index.js');
var app = express(); //start the express app

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname)); //pour les images


app.set('view engine', 'pug');
app.set('views', './views');
app.use('/', router);

app.listen(3000, function(){
    console.log('Express app running');
});