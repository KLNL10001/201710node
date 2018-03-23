let express = require('express')
let app = express()
app.listen(3000)
let  fs = require('fs')
let bodyParser =require('body-parser')
app.use(bodyParser.json())
//静态文件中间价
app.use(express.static(__dirname))//__dirname是当前目录
app.get('/',function (req,res) {
    res.sendFile('./index.html',{root:__dirname})
    
})
