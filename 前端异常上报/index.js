var express = require('express');
const cheerio = require('cheerio');
var superagent = require('superagent');
var url = require('url');

const sleep = time => new Promise(resolve => setTimeout(resolve,time)) //发动一次休息
var cnodeUrl = 'https://hz.fang.anjuke.com/loupan/all/';


let app = express();
app.get('/', function (req, res) {
    superagent.get(cnodeUrl).end(function (err, result) {
        console.log(result)
        if(err){
            return next(err)
        }
        var $ = cheerio.load(result.text);
        var items = [];
        $('.key-list').each(function(idx, element){
            var $element = $(element);
            items.push({
                title: $element.find('.huxing span').text(),
                href: $element.find('.ffavor-pos p span').text(),
            });
        });
        res.send(items);
    })
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});