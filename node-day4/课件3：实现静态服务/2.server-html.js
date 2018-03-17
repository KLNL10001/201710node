let http = require('http')
let port = 3000;
let fs = require('fs')
let url = require('url')//把一个路径解析成一个对象

/*http.createServer(function (req,res) {//监听函数，当请求到来时会执行回调函数
   res.setHeader('Content-type','utf8','text/html;charset=utf-8')
    fs.readFile('index.html',function (err,data) {
        res.end(data)
    })
}).listen(port,() => {
    console.log('服务器已经启动在${port}上')
})*/
//端口号尽量使用3000以上端口号  因为小的端口号 可能会被系统调用

http.createServer(function (req,res) {//监听函数，当请求到来时会执行回调函数
    res.setHeader('Content-type','utf8','text/html;charset=utf-8')
    fs.createReadStream('index.html').pipe(res);
}).listen(port,() => {
    console.log('服务器已经启动在${port}上')
})