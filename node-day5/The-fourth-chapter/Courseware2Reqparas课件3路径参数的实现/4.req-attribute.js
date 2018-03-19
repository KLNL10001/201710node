let  express = require('express')
let app = express();
app.listen(8080)
//想区分查询一个还是查询所有
app.get('/user',function (req,res) {
    console.log(req.query.id);//express扩展的属性
    console.log(req.url)///user?id=1 获取整个路径包括问好后面的
    console.log(req.path);//  /user   express扩展的属性
    console.log(req.headers)//所有的都是小写
    console.log(req.method)//请求的方法   所有的方法都是大写的  GET
    if (req.query.id)//把这个拆出去
    {
        //查一个
    }
    else
    {
       //查一堆
    }
})

// { 'cache-control': 'no-cache',
//     'postman-token': '9720acc8-c2a0-4dce-a9f5-ba98233c00c3',
//     'content-type': 'application/x-www-form-urlencoded',
//     'user-agent': 'PostmanRuntime/3.0.11-hotfix.2',
//     accept: '*/*',
//     host: 'localhost:8080',
//     'accept-encoding': 'gzip, deflate',
//     connection: 'keep-alive' }
