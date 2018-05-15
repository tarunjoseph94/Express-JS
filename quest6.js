var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser());
app.get('/',function (req,res)
{
	res.sendfile('form1.html');
});
app.post('/submit-student-data',function (req,res)
{
	var name=req.body.fname+" "+req.body.lname;
	console.log('The name is '+name);

});
app.listen(8080);
console.log("Server running");