let http = require('http')
let port = 3000;
let fs = require('fs')
let url = require('url')
let path = require('path')

http.createServer(function (req,res) {//监听函数，当请求到来时会执行回调函数
     // console.log(req.url);
    // let urlObj = url.parse("http://username:password@localhost:3000/s?a=1&b=2#hash")
    //以下为路由规则
    //根据不同的路径返回不同的内容
    //如果返回的是/ 则显示主页html
    //如果访问的是文件：将文件读取返回
    //如果是文件夹 默认去找html文件
    //文件不存在 返回404
    let {pathname,query} = url.parse(req.url,true);
    console.log(pathname);
    fs.stat('.'+ pathname,function (err,stats) {
        if (err)
        {
            res.statusCode=404//找不到就是404
            res.end(`${pathname} not found`)
        }
        else if (stats.isFile())//是文件的情况
        {
            //没有写头
            fs.createReadStream('.'+ pathname).pipe(res)
        }
        else if (stats.isDirectory())//如果是文件夹  默认查找index.html
        {
            console.log('.' + pathname)//./也是文件夹  获取当前的路径和index.html进行拼接去读取，这个文件也有可能不存在
           let p =  path.join('.'+ pathname , './index.html')//拼出来的要读取的内容
            fs.createReadStream(p).pipe(res)
        }
    })
    // console.log(urlObj,true);//true的作用是把query转化为对象
    // res.setHeader('Content-type','utf8','text/html;charset=utf-8')
    // fs.createReadStream('index.html').pipe(res);
}).listen(port,() => {
    console.log(`服务器已经启动在${port}上`)
})
//url
/*/
/index.css
/favicon.ico*/

/*
 Url {
 protocol: 'http:',
 slashes: true,这儿指的是 http:// 后面的这两个斜杠
 auth: 'username:password',
 host: 'localhost:3000',
 port: '3000',
 hostname: 'localhost',
 hash: '#hash',
 search: '?a=1&b=2',
 query: 'a=1&b=2',
 pathname: '/s',
 path: '/s?a=1&b=2',
 href: 'http://username:password@localhost:3000/s?a=1&b=2#hash' }
 Url {
 protocol: 'http:',
 slashes: true,
 auth: 'username:password',
 host: 'localhost:3000',
 port: '3000',
 hostname: 'localhost',
 hash: '#hash',
 search: '?a=1&b=2',
 query: 'a=1&b=2',
 pathname: '/s',
 path: '/s?a=1&b=2',
 href: 'http://username:password@localhost:3000/s?a=1&b=2#hash' }
 Url {
 protocol: 'http:',
 slashes: true,
 auth: 'username:password',
 host: 'localhost:3000',
 port: '3000',
 hostname: 'localhost',
 hash: '#hash',
 search: '?a=1&b=2',
 query: 'a=1&b=2',
 pathname: '/s',
 path: '/s?a=1&b=2',
 href: 'http://username:password@localhost:3000/s?a=1&b=2#hash' }
*/

