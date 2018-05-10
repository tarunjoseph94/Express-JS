var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser());
app.get('/',function (req,res)
{
	res.sendFile('/home/mca1/form1.html');
});
app.post('/submit-student-data',function (req,res)
{
	var name=req.body.fname+" "+req.body.lname;
	res.send(name+" Submitted Sucessfully");

});
app.listen(8080);
console.log("Server running");