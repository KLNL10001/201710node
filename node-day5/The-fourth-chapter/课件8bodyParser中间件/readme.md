＃express搭建服务
、、、
let express = require('express')

let app = express()

app.listen(8080)
、、、

## express是路由
-必须method和path全部都匹配上，执行对应的callback
、、、
app[method](path,function(){

})

app.all('*',function(){

})
、、、

＃＃路径参数路由
－将匹配到的结果生成一个对象 放到req.params上
、、、
app.get('/user/:id/name',function(){

})

、、、

＃＃req上的属性

、、、
req.params 路径参数
req.url    整个的路径
req.path  pathname 的路径
req.headers 请求头
req.method 请求的方法
req.query   获取请求的参数  问好后面的参数
、、、

＃＃middleWare
－中间件的作用
   －处理公共逻辑 扩展req  或者res
   －可以决定是否继续执行
   －开头匹配到就会执行中间件
   －错误中间件，在页面的最后 参数是4个 第一个参数是错误 err
＃＃res 基本上新增的是方法

－res.json
-res.sendFile()绝对路径 path.jion /path.resolve
-res.sendStatus
-res.send

##用户管理模块
－登陆  /login
－注册   /reg
##文章管理模块
－发表文章  /post
－删除文章  /delete

<form method="post" action=""></form>
</body>

method:默认是get
action：指的是提交到哪里去

清缓存 点击右上角执行文件 然后点击减号  减减减 就是清除缓存



