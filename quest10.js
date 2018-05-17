var express=require('express');
var engines=require('consolidate');
var app=express();
app.engine("html",engines.mustache);
app.set("view engine","html");
var bodyParser=require('body-parser');
app.use(bodyParser());
app.get('/',function (req,res)
{
	
	res.sendfile('form1.html');

});
app.post('/submit-student-data',function (req,res)
{
	var fname=req.body.fname;
	var lname=req.body.lname;
	res.render("formRet",{fname:fname,lname:lname});

});
app.listen(8080);
console.log("Server running");