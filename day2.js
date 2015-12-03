// if http were not a core module, we would need to npa install it first
var http = require('http');
var url = require('url');
var fs = require('fs');
// var homePageHtml = fs.readFileSync(''homePageHtml.html');

var server = http.createServer(function(request, response){
	//call back is when anytime you have a method that takes the param of 
	//another method and the method will not run until the method is complete
	
	var pathName = url.parse(request.url)
	if(pathName.pathname == '/'){
		//user wants to see the home page
		response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.end('<h1>Home Page</h1>')
	}else if (pathName.pathname == '/about'){
		//the user wants to see the about page
		response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.end('<h1>About Page</h1>')
	}

	response.writeHead(200, {
		'content-type': 'text/html'
	});
	
	response.end('<h1>We did it</h1>');
});

server.listen(3939);
console.log("The server is listening on port 3939");