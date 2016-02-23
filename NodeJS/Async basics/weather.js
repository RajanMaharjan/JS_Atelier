var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Nepal&appid=44db6a862fba0b067b1930da0d769e98&units=imperial';

module.exports = function (callback) {
	console.log('Today\'s weather');

	request({
		url: url,
		json: true
	},
	function(error,response,body){
		if(error){
			callback('Unable to fetch the weather !');
		}else{
		//console.log(JSON.stringify(body, null, 4));
			callback('It\'s '+ body.main.temp +' in '+body.name);
		}
	});

	callback('Here is the current weather !')

}