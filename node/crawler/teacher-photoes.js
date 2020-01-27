const http = require('http')
const cheerio = require('cheerio')
const download = require('download')
const HOST = 'http://web.itheima.com/'

let req = http.request(HOST + 'teacher.html', res => {
  let chunks = [];
  res.on('data', chunk => {
    chunks.push(chunk)
  })

  res.on('end', ()=> {
    let htmlStr = Buffer.concat(chunks).toString('UTF-8')
    let $ = cheerio.load(htmlStr)
    // let imgs = []
    // $('.tea_main .tea_con .li_img > img').each((index,item) => {
    //   imgs.push(HOST + $(item).attr('src'))
    // })

    let imgs = Array.prototype.map.call($('.tea_main .tea_con .li_img > img'), item => HOST + encodeURI($(item).attr('src')))
    console.log(imgs)

    Promise.all(imgs.map(x => download(x, 'dist'))).then(() => {
      console.log('download success!')
    })
  })
})

req.end()
