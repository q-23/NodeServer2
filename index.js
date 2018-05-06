var http = require('http');
var fs = require('fs');

var server = http.createServer();


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
            var data = fs.readFileSync('index.html','utf8');
    		response.write(data);
            response.end();
        
    } else {
            var img = fs.readFileSync('./cat.jpg');
            response.setHeader('Content-Type', 'image/gif');
            response.end(img, 'binary');

    }
});

server.listen(8080);