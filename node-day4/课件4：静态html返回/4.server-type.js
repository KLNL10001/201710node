let http = require('http')
let port = 3000;
let fs = require('fs')
let url = require('url')
let path = require('path')

//.css  .js  .html
let mime ={
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html'
}

http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    console.log(pathname);
    let extName =pathname.match(/\.\w+$/)
    console.log(extName);
    fs.stat('.'+ pathname,function (err,stats) {
        if (err)
        {
            res.statusCode=404
            res.end(`${pathname} not found`)
        }
        else if (stats.isFile())
        {
            res.setHeader('Content-Type',mime[extName]+';text/html;charset=utf8')
            fs.createReadStream('.'+ pathname).pipe(res)
        }
        else if (stats.isDirectory())
        {
            res.setHeader('Content-Type','text/html;charset=utf8')
            console.log('.' + pathname)
            let p =  path.join('.'+ pathname , './index.html')
            fs.createReadStream(p).pipe(res)
        }
    })

}).listen(port,() => {
    console.log(`服务器已经启动在${port}上`)
})

