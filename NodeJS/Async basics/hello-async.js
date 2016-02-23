setTimeout(function(){
	console.log('1');
},2000);

setTimeout(function(){
	console.log('3');
},1000);

console.log('2');

function printIn2sec (message){
	setTimeout(function(){
		console.log(message);
	},2000);
}

printIn2sec('Hello async !!');
