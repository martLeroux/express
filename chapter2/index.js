var express = require("express");

var app = express(); //start the express app

//CRUD
//Create = post
//Read = get
//Update = put
//Delete = delete

app.get('/getTest', function(req,res){
    res.send("This is a test get request.");
});

var handler1 = function(req, res, next){
    req.params.file += '.txt';
    next();
}

var handler2 = function(req, res){
    res.download(__dirname + '/' + req.params.file);
}

app.get('/item/:id', function(req,res){
    res.send(req.params.id);
});

app.get('/download/:file', [handler1, handler2]);

app.get('/postTest', function(req,res){
    res.sendFile(__dirname + '/form.html');
});

app.post('/postTest', function(req,res){
    res.send("This is a test post request.");
});

app.get('/putTest', function(req,res){
    res.sendFile(__dirname + '/form.html');
});

app.put('/putTest', function(req,res){
    res.send("put test");
});

app.delete('/deleteTest', function(req,res){
    res.send("delete test");
});

app.listen(3000, function(){
    console.log('Express app running');
});