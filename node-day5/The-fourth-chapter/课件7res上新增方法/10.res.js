let express=require('express')
let app = express()
app.listen(8080)

//不能直接返回对象res.json()//返回json的
//返回html页面
//res.sendFile()//返回文件
//res.statusCode  res.end =>res.sendStatus()
//res.end res.header()=> res.send()
app.get('/json',function (req,res) {
    res.json({name:'春利',age:19})
})

//路由是严格匹配的 但是 中间件use并不是严格匹配
//  不能通过..／查找（root是不支持的） 想读取到确切的文件 用path模块进行拼接即可
app.get('/',function (req,res) {
    // fs.createReadStream('./index.html').pipe()这是以前的写法
  //res.sendFile('./index.html') //TypeError: path must be absolute or specify root to res.sendFile
  //   res.sendFile(__dirname+'/index.html')//我很帅
  //   res.sendFile('./index.html',{root:__dirname})//我很帅

    res.sendFile(require('path').join(__dirname,'..','index.html'))//Forbidden  //不能通过../来访问上一级目录
})
 app.get('/status',function (req,res) {
     res.sendStatus(404)
 })
app.get('/send',function (req,res) {
    // res.send(404)//Not Found  send方法有判断转换的功能
    res.send('中文')//中文

})



//其内部实现如下
app.use(function (req,res,next) {
    res.mysend=function (data) {
        if (typeof data == "object")
        {
            res.setHeader('Content-Type','application/json;charset=utf8')
            return res.end(JSON.stringify(data))
        }
        if (typeof data == "string")
        {
            res.setHeader('Content-Type','text/plain;charset=utf8')
            return res.end(data)
        }
        if (typeof data == "number") {

            res.statusCode = data
            return res.end(require('_http_server').STATUS_CODES[data])//OK
        }
    }
    next()
})
app.get('/mySend',function (req,res) {
    // res.send(404)//Not Found  send方法有判断转换的功能
    res.mysend(200)//中文
})
