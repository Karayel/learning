var express = require('express');
var app = express()
var fs = require('fs');

app.get('/books',function(req,res){
	var obj = fs.readFile(process.argv[3], (err, data) => {
  		if (err) throw err;
  		var obj = JSON.parse(data.toString());
  		res.json(obj);
	});
	
})

app.listen(process.argv[2])