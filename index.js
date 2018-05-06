var http = require('http');
var fs = require('fs');

var server = http.createServer();


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
            var data = fs.readFileSync('index.html','utf8');
    		response.write(data);
            response.end();
        
    } else {
            var e404 = fs.readFileSync('404.html','utf8');
            response.write(e404);
            response.end();
    }
});

server.listen(8080);