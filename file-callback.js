console.log('Beginning...');
console.log('Continuing on...');
console.log('The End.');

console.log('Beginning...');
var time = setTimeout(function(){
	console.log("The End")
}, 500)
//even if you put interval as 0, it will still show up as the third line
//because setTimeout is an event que and will wait for it to finish running
//before it goes back to printing the event que.
console.log('continue...');


//diff way to code
console.log('starting'):
var timer = setTimeout(writeTheEnd, 500);
console.log('continuing');

function writeTheEnd(){
	console.log("The End");
}
