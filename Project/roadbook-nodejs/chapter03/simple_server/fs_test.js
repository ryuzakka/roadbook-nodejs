const http = require('http');
const fs = require('fs').promises;

http.createServer(async(req, res) => {
        try {
            const f = await fs.readFile('./fs_test.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(f);
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(error.message);
        }
    })
    .listen(8080, () => {
        console.log('8080 port stand by...');
    })