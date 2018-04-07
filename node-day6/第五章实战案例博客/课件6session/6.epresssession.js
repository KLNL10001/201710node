/**
 * Created by zichunli on 18/4/6.
 */
var express = require('express')
var session = require('express-session')
var app = express()
app.use(session({
    secret:'chunli' ,//secret的值建议使用随机字符串  加密的秘钥  为了防止客户端的篡改
    cookie:{maxAge:60*1000*30},//过期时间(毫秒)
    resave:true,//每次请求结束都要重新保存 不管有没有修改
    saveUninitialized:true//保存未修改过的session
}))//req.session

app.get('/',function (req,res) {
    var isLogin = req.session.isLogin

    if (isLogin)
    {
        res.send('老朋友')

    }
    else
    {
        req.session.isLogin='true'
        res.send('新朋友')
    }

})
app.listen(8080)

//session放在服务器的内存中  其缺点是 重新启动后session就会改变  所以把session放在文件或者数据可中
//MEN架构

