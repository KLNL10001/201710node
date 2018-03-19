let  express = require('express')
let app = express();
app.listen(8080)
//拦截的功能
app.param('id',function (req,res,next) {
   //req,res和
    req.params.id = `你的学号是${req.params.id}`
    next();//调用了next就可以向下匹配
    // res.end()//如果在这里调用了这个 也就是结束了请求  就不再向下走了
})
app.param('name',function (req,res,next) {
    req.params.id = `你的学号是${req.params.id}`
    next();//调用了next就可以向下匹配
})

app.get('/user/:id/:name',function (req,res) {
    res.end('aaa')
})