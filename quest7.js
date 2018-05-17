var express=require('express');
var app=express();
var server = app.listen(8080,"127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});

