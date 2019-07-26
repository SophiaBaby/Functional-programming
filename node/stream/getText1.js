const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
  const method = req.method; // 获取请求方法
  if (method === 'GET') { // get 请求方法判断
    const fileName = path.resolve(__dirname, 'data.txt');
    fs.readFile(fileName, function (err, data) {
      res.end(data);
    });
  }
});
server.listen(8080);


/*
* 一个对网络请求做压力测试的工具ab，ab 全称 Apache bench ，
* 是 Apache 自带的一个工具，因此使用 ab 必须要安装 Apache 。mac os 系统自带 Apache ，windows用户视自己的情况进行安装。
* 运行ab 之前先启动 Apache ，mac os 启动方式是 sudo apachectl start 。
* */

/*使用ab工具进行测试，运行命令ab -n 100 -c 100 http://localhost:8000/，
其中-n 100表示先后发送100次请求，-c 100表示一次性发送的请求数目为100个。
对比结果分析使用stream后，有非常大的性能提升，小伙伴们可以自己实际操作看一下。
*/