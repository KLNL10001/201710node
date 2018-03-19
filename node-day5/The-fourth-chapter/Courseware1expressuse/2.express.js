
let express = require('express')

//引用express模块，express是一个函数
let app = express();
//express函数执行后返回的是一个http的监听函数,就是http.createServer中的函数，在此函数上扩展了一个listen方法
//可以监听端口
 /*app.listen(8080,function () {
     console.log('start8080')
 });*/

//app.listen就是基于以前封装的  相当于以下的函数
// app.listen1 = function (...args) {
//     require('http').createServer(app).listen(...args)
// }
//
// app.listen1(8080,function () {
//  console.log('start8080')
//  });
//
