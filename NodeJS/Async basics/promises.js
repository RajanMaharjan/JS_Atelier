function doWork (data,callback) {
	callback('done');
}

function doWorkPromise(data){
	return new Promise(function(resolve, reject){
			
	resolve('Every thing worked!');

	reject({
		error: 'Something bad happned'
	});
	});
}

doWorkPromise('some data').then(function(data){
	console.log(data);
},function(error){
	console.log(error);
});