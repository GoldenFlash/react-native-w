var express = require("express");
var router = express.Router();

var superagent = require('superagent');
var cheerio = require('cheerio');

var fs = require('fs');
var path = require("path")

// var url = 'https://v.qq.com/x/cover/vbb35hm6m6da1wc/s00318jxyqt.html'
var url = "https://v.qq.com/x/cover/75ijb6qovzrhtp7.html"
// 'https://cnodejs.org/'

router.get("/",(req,res,next)=>{
    console.log("1231231")
    superagent.get(url)
    .end(function (err, sres) {
        // console.log("sres",sres)
        // 常规的错误处理
        if (err) {
            return next(err);
        }
        let data = sres.text
        let reg =/https(.*)?/g
        
        // var items = [];
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load，习惯性地命名为 `$`
        // 接下来就可以使用熟悉的 jquery 操作了
        // var $ = cheerio.load(sres.text);
        // var article = $(".container_inner .player_container .mod_player .tenvideo_player").childNodes
        // txp_player txp_player_desktop txp_autohide_progress
        console.log(data.match(reg))
        // $('#topic_list .cell').each(function (index, element) {
        //     var $img = $(element).find('img');
        //     var $topic = $(element).find('.topic_title');
        //     items.push({
        //         author: $img.attr('title'),
        //         title: $topic.attr('title'),
        //         href: $topic.attr('href')
        //     });
        // });
        // fs.writeFile('html.txt', JSON.stringify(sres.text), (err) => {
        //     if (err) throw err;
        //     console.log('文件已被保存');
        // }); 
        res.send("article");
    });
    // res.send({
    //     message:"123"
    // })
})
module.exports = router
