let express = require('express')
let app = express()
app.listen(3000)

let  bodyParser = require('body-parser')

// /user/login
let user = require('./routes/user')
let article = require('./routes/article')
//表示解析的是表单格式 把表单内的数据解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}))
//解析json格式 把json字符串转化成对象 解析后放在req.body上
app.use(bodyParser.json())

//bodyParser  是自己写的中间件
/*function bodyParser() {
    return function (req,res,next) {
        let str = ''
        req.on('data',function (chunk) {
            str += chunk
        })
        req.on('end',function () {
           req.body= require('querystring').parse(str)
            next()
        })
        
    }
}
app.use(bodyParser())*/

app.use('/user',user)
//  /article/post
app.use('/article',article)
