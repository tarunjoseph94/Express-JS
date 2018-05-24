var express=require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());
app.get('/cookieset',function(req,res)
	{
		res.cookie('cookie_name','cookie_value');
		res.cookie('company','javapoint');
		res.cookie('Name','Tarun');
		res.send('cookie is set');
	});
app.get('/cookieget',function(req,res)
	{
		res.send(req.cookies);
	});
app.get('/',function(req,res)
	{
		res.send('Welcome to javapont');
	});
app.listen(8080);