let http = require('http')
let port = 3000;

http.createServer(function (req,res) {//监听函数，当请求到来时会执行回调函数
//req 代表客户端  它是一个可读流
    //res 代表的是服务端  他是一个可写流
    console.log('start')
    res.setHeader('Content-type','text/plain;charset=utf8')
    res.write('hello')
    res.end()
}).listen(port,()=>{
    console.log('服务器已经启动在${port}上')
})
//端口号尽量使用3000以上端口号  因为小的端口号 可能会被系统调用