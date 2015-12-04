var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'content-type': 'text/html'})
	response.end('<h1>Express</h1><h3>Welcome to Express</h3')
});

server.listen(3000)
console.log("the server is litening on port 3000");