let http= require('http')
let url = require('url')
//1.当访问/sigin返回登陆
//2.当访问/siginup的时候  返回注册
//3.访问其他的时候  返回404
http.createServer(function (req,res) {
    //路由 根据不同的路径  返回不同的内容
    let {pathname,query}=url.parse(req.url,true)
    if (pathname ==='/sigin')
    {
        let str ='';
        req.on('data',function (chunk) {
            str += chunk;
        })
        req.on('end',function () {
            console.log(str)
        })
        res.setHeader('Content-Type','text/plain;charset=utf8')
       return  res.end('登陆')
    }
    else if (pathname ==='/sigup')
    {
        res.setHeader('Content-Type','text/plain;charset=utf8')
        return  res.end('注册')
    }
    res.end('404')

}).listen(8080)