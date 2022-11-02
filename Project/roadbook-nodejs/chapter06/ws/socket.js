const WebSocket = require('ws');

// const ws = new WebSocket('ws://www.host.com/path');

// ws.on('open', function open() {
//     ws.send('something');
// });

// ws.on('message', function incoming(data) {
//     console.log(data);
// });

module.exports = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('New Client : ', ip);

        ws.on('message', (message) => { // 클라이언트로부터 받은 메세지
            console.log(message);
        });
        ws.on('error', (err) => { // 오류 처리
            console.error(err);
        });
        ws.on('close', () => { // 종료
            console.log('Client Living', ip);
            clearInterval(ws.interval);
        });
        ws.interval = setInterval(() => { // 서버에서 메세지
            if (ws.readyState === ws.OPEN) {
                ws.send('Message From Server');
            }
        }, 3000);
    });
};