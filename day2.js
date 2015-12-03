// if http were not a core module, we would need to npa install it first
var http = require('http');
var url = require('url');
var fs = require('fs');
// var homePageHtml = fs.readFileSync(''homePageHtml.html');

var server = http.createServer(function(request, response){
	//call back is when anytime you have a method that takes the param of 
	//another method and the method will not run until the method is complete

})