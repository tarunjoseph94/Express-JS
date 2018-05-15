var express=require('express');
var app=express();


app.get('/',function (req,res)
{
	res.sendfile('form2.html');
});
app.listen(8080);
console.log("Server running");