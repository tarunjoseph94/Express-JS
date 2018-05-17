var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/',function (req,res)
	{
		res.sendfile("staticRet.html");
	});
var server = app.listen(8080, function () {
    console.log("server Running");
    });

