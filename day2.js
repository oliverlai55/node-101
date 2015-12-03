// if http were not a core module, we would need to npa install it first
var http = require('http');
var url = require('url');
var fs = require('fs');
// var homePageHtml = fs.readFileSync(''homePageHtml.html');
 function homePage(request, response){
 	response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.end('<h1>Home Page</h1>')
 }


function homeContent(){
	var html = '<h1>This is the home page</h1>'
	return html;
}
function aboutContent(){
	var html = '<h1>This is the about page</h1>'
	return html;
}

function contactContent(){
	var html = '<h1>This is the Contact page</h1>'
	return html;
}


function createPage(request, response, page){
	response.writeHead(200, {
		'content-type': 'text/html'
	});
	// response.end('<h1>' + page + ' Page</h1>');
	if(page == 'home'){
		response.end(homeContent());
	}else if (page == 'about'){
		response.end(aboutContent());
	}else if (page == 'contact'){
		response.end(contactContent());
	}
}

var server = http.createServer(function(request, response){
	//call back is when anytime you have a method that takes the param of 
	//another method and the method will not run until the method is complete
	
	var pathName = url.parse(request.url)
	if(pathName.pathname == '/'){
		//user wants to see the home page
		// homePage(request, response);
		// response.writeHead(200, {
		// 	'content-type': 'text/html'
		createPage(request, response, 'home');
		
		response.end('<h1>Home Page</h1>')
	}else if (pathName.pathname == '/about'){
		//the user wants to see the about page
		// response.writeHead(200, {
		// 	'content-type': 'text/html'
		createPage(request, response, 'about');
		
		
	}
	else if (pathName.pathname == '/contact'){
		//the user wants to see the about page
		// response.writeHead(200, {
		// 	'content-type': 'text/html'
		createPage(request, response, 'contact');
		
		
	}
	// response.end('<h1>About Page</h1>')
	else{
		//we don't know what page the user is on, but they aren't on home or about
	response.writeHead(200, {
		'content-type': 'text/html'
		
	});
	response.end('what are you doing here')
	
	}
	response.end('<h1>We did it</h1>');
});

server.listen(3939);
console.log("The server is listening on port 3939");