let express = require('express')
let path = require('path')
let router = express.Router()
//router也是一个函数
router.get('/login',function (req,res) {
   res.send('登陆')
})

//path.resolve 是根据运行的文件的位置来解析的 所以此时不能用resolve 而join拼接出来的是聚堆路径
router.get('/reg',function (req,res) {
    res.sendFile(path.join(__dirname,'../views/reg.html'))
    // res.sendFile(path.resolve('../views/reg.html')// ENOENT: no such file or directory, stat '/Users/zichunli/Desktop/201710node/node-day5/The-fourth-chapter/views/reg.html'
})

//登录的时候也可能会有相同的数据处理 所以第一反应是抽出去  如果所有的都有这种处理 就把这种处理方法写在外面

// router.post('/reg',function (req,res) {
//     let str = ''
//     req.on('data',function (chunk) {
//         str+=chunk
//     })
//     req.on('end',function () {
//         console.log(str)  //username=44&password=ttt
//         //变成对象
//         //方法1:这种方法不是很好
//        /* let obj ={}
//         str.replace(/([^&=]+)=([^&=]+)/g,function () {
//             obj[arguments[1]] = arguments[2]
//         });
//         console.log(obj)//{ username: 'ttt', password: '7777' }*/
//        //方法2 node的自带的模块
//         console.log(require('querystring').parse(str));//node自带的模块 { username: '555', password: '6666' }
//     })
// })

router.post('/reg',function (req,res) {
    console.log(req.body);//{ username: 'rrrr', password: 'egg' }
    console.log(req.headers['content-type'])//application/x-www-form-urlencoded 表单格式

})

router.post('/login',function (req,res) {

})

module.exports = router