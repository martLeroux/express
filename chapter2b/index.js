var express = require("express");
var router = express.Router(); //start the express app
var fs = require("fs");

router.get('/message', function(req,res){
    res.send('Hello from the router!');
});

router.get('/', function (req,res){
    res.send('yo!');
});


router.get('/json', function(req,res) {
    //200 = success
    //500 = servor error
    //404 = file not found
    fs.readFile("dummis.json", function(err, data) {
        if (err){
            res.sendStatus(500);
        } 
        res.send(data.toString());
    });
});

router.get('/download', function(req,res) {
    res.download(__dirname + '/' + 'sample.txt');
})

module.exports = router;