var http = require('http');
//require is a method to tell Node to include http module

var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/plain'})
	// res.end('<p>hello world</p>');
//req = http request
//res = http response
	// console.log("test");

	console.log("hello");
	setTimeout(function(){
		console.log("world");
	}, 3000)
	console.log("hello");
	res.end();
});

server.listen(3000);
console.log("our server is listening on port 8000");