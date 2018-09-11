var http = require('http');

var server = http.createServer((req, res) => {
    console.log('requesting..... ');
    // res.setHeader("Content - Type", "text / html");

    /*res.writeHead sends the response as text/html*/
    // res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('hello client');
    res.end();
});

server.listen(3000);
console.log('server listening on http://127.0.0.1:3000/');