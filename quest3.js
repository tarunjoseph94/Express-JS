var express=require('express');
var app=express();
app.get('/Node',function (req,res)
{
	res.send("Function on Node");
});
app.get('/Angular',function (req,res)
{
	res.send("Function on Angular");
});
app.get('/',function (req,res)
{
	res.send("Welcome");
});

var ser=app.listen(8080,function(){});