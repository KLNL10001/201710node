'use strict';

var express = require('express');
var app = express();
app.listen(8080);
var fs = require('fs');

// app.get('/index.html',function (req,res) {
//     res.sendFile('./dist/index.html',{root:__dirname})
// })
//
// app.get('/index.css',function (req,res) {
//     res.sendFile('./dist/index.css',{root:__dirname})
// })

//如下处理静态文件的过程  自定义的静态文件中间件
/*function static(p) {//dist 目录下的是静态文件
    return function (req,res,next) {
       let  path =require('path').join(p, req.path)//我们要读取的文件
        fs.stat(path,function (err,stats) {
            if (err)//文件不存在
            {
                return next()
            }
            if(stats.isFile())
            {
                fs.createReadStream(path).pipe(res)
            }
        })
    }
}
app.use(static('dist'))*/

app.use(express.static('dist'));
//# sourceMappingURL=3.static.js.map