var express = require('express')
var app = express();

app.get('/', function(req,res){
    var err = new Error ("Something went wrong")
    next(arr)
})

app.use(function(err, req, res, next){
    res.status(500)
    res.send("Oops, Something went wrong")
})

app.listen(3000)