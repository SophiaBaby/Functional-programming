const http = require('http');
const fs = require('fs');
const path = require('path');

/*
* 微信生成二维码接口
* params src 微信url / 其他图片请求链接
* params localFilePath: 本地路径
* params data: 微信请求参数
* */
const downloadFile=async (src, localFilePath, data)=> {
  try{
    const ws = fs.createWriteStream(localFilePath);
    return new Promise((resolve, reject) => {
      ws.on('finish', () => {
        resolve(localFilePath);
      });
      if (data) {
        request({
          method: 'POST',
          uri: src,
          json: true,
          body: data
        }).pipe(ws);
      } else {
        request(src).pipe(ws);
      }
    });
  }catch (e){
    logger.error('wxdownloadFile error: ',e);
    throw e;
  }
}
downloadFile('./test.jpj','./test.jpg',{})