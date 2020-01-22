const dgram = require('dgram');
const server = dgram.createSocket("udp4");

server.on('error', (err) => {
  console.log(`服务器异常\n${err.stack}`)
  server.close()
})

server.on('message', (msg, rinfo) => {
  console.log(msg, rinfo)
})

server.on('listening', () => {
  const address = server.address();
  console.log(address)
})

server.bind(41234)
