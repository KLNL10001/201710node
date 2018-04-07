
var http = require('http')
var fs   = require('fs')
var url  = require('url')
var querystring = require('querystring')

/*http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true)
    var pathname =urlObj.pathname;
    if (pathname=='/write')
    {
        var ts = new Date(Date.now()+20*1000).toGMTString()
        res.setHeader('set-Cookie',"name=lili2;Expires="+ts)
        res.end('over')
    }
    else if (pathname=='/read')
    {
        var cookie    = req.headers.cookie
        var cookieObj = querystring.parse(cookie,';')
        // console.log(req.headers['cookie'])
        console.log(cookieObj);
        res.end('read')
    }
}).listen(8080)*/

http.createServer(function (req,res) {
 var urlObj=url.parse(req.url,true)
 var pathname =urlObj.pathname;
 if (pathname == '/buy')
 {
     var ts = new Date(Date.now()+20*1000).toGMTString()
     res.setHeader('Set-Cookie',"goodsname"+Math.random()+"=phone"+Math.random()+";Expires="+ts)
     res.end('over')
 }
 else if (pathname == '/cart')
 {
     //读取请求头中的cookie
    var cookie    = req.headers.cookie
     //转成对象
    var cookieObj = querystring.parse(cookie,';')
    console.log(cookieObj);
    res.end(JSON.stringify(cookieObj))
 }
 }).listen(8080)