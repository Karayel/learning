var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var URL = url.parse(req.url,true);
	var date = new Date(URL.query.iso);
	res.writeHead(200, { 'Content-Type': 'application/json' })
	if(URL.pathname === "/api/parsetime"){
		var parsetimeJSON = {hour: date.getHours(),minute:date.getMinutes(),second:date.getSeconds()}
		res.write(JSON.stringify(parsetimeJSON));
	}else{
		var unixtimeJSON = { unixtime: date.getTime()};
		res.write(JSON.stringify(unixtimeJSON));
	}
	res.end();
});

server.listen(process.argv[2]);