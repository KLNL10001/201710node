let express = require('express')
let app = express()
app.listen(3000)
let  bodyParser = require('body-parser')
let user    = require('./routes/user')
let article = require('./routes/article')
app.use(bodyParser.urlencoded({extended:false}))
//告诉他页面上所有render方法中的html  都用ejs模板来渲染
app.engine('html',require('ejs').__express)
//更改模板路径 默认叫做views
app.set('views','static')
//配置默认后缀名
app.set('view engine','html')
app.use(bodyParser.json())
app.use('/user',user)
app.use('/article',article)
