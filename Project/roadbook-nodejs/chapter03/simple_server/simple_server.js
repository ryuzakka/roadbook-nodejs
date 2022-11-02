const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 200 응답에 대한 정보(헤더)
        res.write('<h1>Node.js로 서버 만들기</h1>'); // 클라이언트에게 보낼 데이터
        res.end('<p>3장 http모듈 공부 중입니다.</p>'); // end() = 응답을 종료하는 메서드
    })
    .listen(8080, () => {
        console.log('8080port에서 서버 연결중 ..');
    });