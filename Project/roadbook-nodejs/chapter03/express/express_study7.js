const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

/** morgan */
const logger = require('morgan');
app.use(logger('combined'));
app.use(logger('common'));
app.use(logger('dev'));
app.use(logger('short'));
app.use(logger('tiny'));

app.get('/', (req, res) => {
    const output = `
            <h2>express 웹 메이킹</h2>
            <p>main page.</p>
            <img src="./sample.png" />
        `
    res.send(output);
});

app.get('/usr/:id', (req, res) => {
    res.send(req.params.id + "님의 개인 페이지");
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중..');
});