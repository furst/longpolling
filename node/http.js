var http = require('http');

var request, response;

var host = '127.0.0.1';
var port = 8080;
http.createServer(function(req, res) {
	console.log('Received request: ' + req.url);
	request = req;
    response = res;
}).listen(port);

var response;

function checkUpdate() {
	var rand = Math.floor(Math.random()*(4000-2000+1)+2000);

	setTimeout(function() {
		//response.write('_testcb(\'ok\')', 'utf8');
		time = new Date().getTime();
		response.end(String(time));
	}, rand);
}

setInterval(checkUpdate, 2000);

