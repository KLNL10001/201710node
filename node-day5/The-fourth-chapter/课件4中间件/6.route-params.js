let  express = require('express')
let app = express();
app.listen(8080)
//拦截的功能 在这里req和res都是同一个
//处理参数
app.param('id',function (req,res,next) {
   //req,res和
    req.params.id = `你的学号是${req.params.id}`
    next();//调用了next就可以向下匹配
    // res.end()//如果在这里调用了这个 也就是结束了请求  就不再向下走了
})
app.param('name',function (req,res,next) {
    req.params.name = `你的姓名是${req.params.name}`
    next();//调用了next就可以向下匹配
})

app.get('/user/:id/:name',function (req,res) {
    // res.setHeader()  在 express中可以简写为res.header()
    res.header('Content-type','text/plain;charset=utf8');
    res.end(`${req.params.id}${req.params.name}`)
})