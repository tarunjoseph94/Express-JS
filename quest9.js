var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser());
app.set("view engine","jade");
app.get('/',function (req,res)
{
	
	res.sendfile('form1.html');

});
app.post('/submit-student-data',function (req,res)
{
	var fname=req.body.fname;
	var lname=req.body.lname;
	res.render("formret",{fname:fname,lname:lname});

});
app.listen(8080);
console.log("Server running");