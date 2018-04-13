var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });
var i = 0;
wss.on('connection', function (ws) {
    console.log('client connected');
    setInterval(function () {
        i ++
        ws.send('看见我吗，来自服务器'+ i)
    },1000)
    ws.on('message', function (message) {
        console.log(message);
    });
});
