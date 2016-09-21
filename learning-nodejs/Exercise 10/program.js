var net = require('net')
var dateFormat = require('dateformat');

var server = net.createServer(function (socket) {  
    socket.write(dateFormat(new Date(), "yyyy-mm-dd HH:MM").toString()+'\n');
    socket.end();
})  
server.listen(process.argv[2]) 