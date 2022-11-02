const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send('Hello World~!');
    next(); // 다음 미들웨어로 넘어가는 역할. express_study3.js 에서는 이게 없어서 콘솔에 LOGGED 출력을 안함
});

const myLogger = function(req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.listen(8080);