let http = require('http')
let port = 3000;
let fs   = require('fs')
let url  = require('url')
let path = require('path')
let mime = require('mime')//实现类型转化
let users = [{username:'zfpx',password:'admin',id:1},{username:'你好',password:'admin',id:2}];

//.css  .js  .html  前后端通信是通过字符串来通信的
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);

    if (pathname ==='/user')//如果访问/user就是对用户的增删改查
    {
        let id = query.id;//在查询参数中取出id看是否有值 有值就表示操作的是某个
        console.log(req.method);//method 的方法全部大写
        console.log(req.headers)// 获取请求头  小写的

        //  { host: 'localhost:3000',
        //  connection: 'keep-alive',
        //(内核)  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
        //  accept: '*/*',
        //（来源） referer: 'http://localhost:3000/',
        // 'accept-encoding': 'gzip, deflate, br',//接受的编码格式
        // 'accept-language': 'zh-CN,zh;q=0.9' }//接受的语言  q=0.9是权重

        switch (req.method)
        {
            case 'GET':
                if (!id)//没有id查询所有
                {
                    res.setHeader('Content-Type','application/json;charset:utf8')
                    res.end(JSON.stringify(users))
                }
                break;
            case 'POST'://添加的逻辑
                let str = '';
                req.on('data',function (chunk) {
                    str+=chunk;//拼接后的结果是一个字符串
                })
                req.on('end',function () {
                    let user =JSON.parse(str)//将字符串转化为对象，少id
                    console.log(users.length)
                    user.id=users.length>0?users[users.length-1].id+1:1//如果有数据 取得最后一项id+1  如果没有数据则默认为1
                    console.log(user.id);
                    users.push(user)
                    res.end(JSON.stringify(user))
                })
                break;
            case 'DELETE':
                //路径里取出来的id都是字符串
                if(id)
                {
                    users.filter(item=>item.id != id)
                    res.end(JSON.stringify({}))
                }


                break;
            case 'PUT':
                break;
        }
        return;
    }
    //处理静态文件的
    fs.stat('.'+ pathname,function (err,stats) {
        if (err)
        {
            res.statusCode=404
            res.end(`${pathname} not found`)
        }
        else if (stats.isFile())
        {
            res.setHeader('Content-Type',mime.getType(pathname)+';text/html;charset=utf8')
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

