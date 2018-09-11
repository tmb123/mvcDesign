var http_IP='127.0.0.1';
var http_port=8899;
var http=require('http');
var server=http.createServer(function(req,res){
	console.log("v vc");
	require('./router').get(req,res);
});//end server()
server.listen(http_port,http_IP);
console.log("listing to http://"+http_IP+":"+http_port);