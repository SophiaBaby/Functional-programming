var express = require('express');
var app = express();
var mysql      = require('mysql');

var router = require('./router/router');


app.use('/api/user',router)

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express app listening at  http://%s:%s',host,port)
})
