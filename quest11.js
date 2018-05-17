var express=require('express');
var app=express();
//only a 5 digit number will be accepted.
app.get("/test/:id([0-9]{5})",function(req,res)
	{
		res.send("id ="+req.params.id);
	});
app.listen(8080);
console.log("Server Running");