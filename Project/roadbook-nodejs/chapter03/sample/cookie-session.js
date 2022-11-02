const http = require('http');

const session = {};
const sessKey = new Date();
session[sessKey] = { name: 'roadbook' };

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Set-cookie': `session=${encodeURI(sessKey)}` });
        // console.log(req.headers.cookie);
        res.end('Session-Cookie --> Header');
    })
    .listen(8080, () => {
        console.log('8080 Port on Serving');
    });