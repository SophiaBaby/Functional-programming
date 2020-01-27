const dgram = require('dgram');
// const Buffer = require('buffer');
const message = Buffer.from('一些文字');
const client = dgram.createSocket("udp4");


client.send(message,41234,'localhost', (err) => {
  console.log(err)
  client.close()
})

