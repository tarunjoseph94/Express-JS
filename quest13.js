var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
app.get('/',function(req,res)
	{
		res.cookie('try','Tarun');
		res.send('cookie is set');
	});
app.get('/get',function(req,res)
	{
		console.log(req.cookies);
	});
app.listen(8080);