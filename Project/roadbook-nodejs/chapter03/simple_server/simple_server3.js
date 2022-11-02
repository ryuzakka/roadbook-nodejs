const http = require('http');

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Node.js Server</h1>');
        res.end('<p>Chapter 03 : http module</p>');
    })
    .listen(8080);

/** Listening Event Listner */
server.on('listening', () => {
    console.log('8080port에서 서버 연결 중 ...');
});

/** Error Event Listner */
server.on('error', () => {
    console.log(error);
});