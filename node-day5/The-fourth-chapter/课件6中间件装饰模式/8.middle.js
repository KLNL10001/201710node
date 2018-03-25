let express = require('express')
let app = express()
app.listen(8080)

app.use(function (req,res,next) {
    let t = new Date().getTime()//访问最初的时间
    let end = res.end//这个是保留的以前的end
    res.end = function (...arg) {
        // console.log(arg)
         console.log(new Date().getTime()-t);
        end.call(res,...arg);
    }
    next()
})

app.get('/water',function (req,res) {

    for(let i =0;i<10;i++)
    {

    }
    res.end('water')//装饰模式
})
app.get('/food',function (req,res) {

    for(let i =0;i<100;i++)
    {

    }
    res.end('food')

})
