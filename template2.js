var express=require('express');
var engines=require('consolidate');
var app=express();
app.engine("html",engines.mustache);
app.set("view engine","html");
app.get("/",function(req,res)
	{
		res.render('form1');
	});
app.listen(8080);