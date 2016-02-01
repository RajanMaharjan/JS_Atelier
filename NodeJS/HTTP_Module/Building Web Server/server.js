var http = require("http");

//Every time we make request of our webserver the cb funtion with be invoked.
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type": "text/html"});
    res.end(`
        <!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
    `);

});

//specifiy the ip address and incoming port
server.listen(3000);

console.log("Server Listening");
