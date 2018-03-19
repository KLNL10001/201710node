let express = require('express')
let app = express()
app.listen(8080)

// /user?id=1查一个  查所有  路径都是/user 区分查多个还是查一个
app.get('/user',function (req,res) {
    res.end('select all')
})
//表示id是占位符  必须有 但是可以随机 http://localhost:8080/user/1
//  /user/1/2 =>{id:1,name:2} = params 一一对应的关系
app.get('/user/:id/:name',function (req,res) {
    res.end('select one'+req.params.id+req.params.name)
})

let url = '/user/1/2'
let url2='/user/:id/:name' //=>{id:1,name:2}   [id,name]
 //将url2转化成一个可以匹配url的正则
//
let arr =[];
let newReg=url2.replace(/:[^\/]+/g,function () {
    arr.push(arguments[0].slice(1));  //[id,name]
    return '([^\/]+)'
})
let reg = new RegExp(newReg)
console.log(reg.test(url))//true
console.log(reg.exec(url))//[ '/user/1/2', '1', '2', index: 0, input: '/user/1/2' ]
let newArr = reg.exec(url)
let result ={}
arr.forEach(function (item,index) {
    result[item]=newArr[index+1]
})
console.log(result)//相当于 req.params { id: '1', name: '2' }
