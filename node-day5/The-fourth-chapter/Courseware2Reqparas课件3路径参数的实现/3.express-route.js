let express = require('express')
let app = express();
app.listen(3000)
//app监听函数上 扩展了很多方法  包括get  post delete  RESTFUL风格中的动词
//app.方法名('路径名',fn)
//从上到下进行匹配  如果匹配到了并且结束响应  就不会继续向下走了
//路径指的是pathname 没有?后面的内容
//express重点就是扩展了req和res的属性
app.get('/signin',function (req,res) {
    res.end('登录')
})
app.post('/signin',function (req,res) {
    res.end('post登录')
})
app.get('/signup',function (req,res) {
    res.end('注册')
})
//all表示所有的方法  *表示所有的路径  一般放到最后
app.all('*',function (req,res) {
    res.end('404')
})
