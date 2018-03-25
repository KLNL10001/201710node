'use strict';

//中间件  当我们访问到最终目标之前执行的内容
var express = require('express');
var app = express();
app.listen(8080);
//use是中间件
//1.中间件的第一个功能：可以进行权限判断
//2.可以对req和res的属性进行扩充
//3.中间件要放在执行路径的上面
//4.中间件默认情况下都匹配，可以指定匹配什么开头的，第一个参数默认为'/'
app.use('/water', function (req, res, next) {
    //不调用next就不继续向下走
    console.log('过滤石头'); //过滤石头
    // res.end('too big')
    req.stone = 'too big';
    next('error  middleware'); //next的参数都是错误，它会传给错误中间件，错误中间件永远放在最底下，如果有错误会直接跳到错误中间件
});

app.use(function (req, res, next) {
    //不调用next就不继续向下走')
    res.header('Content-Type', 'text/plain;charset=utf8');
    next();
});
app.use('/water/a', function (req, res, next) {
    console.log('过滤沙子'); //过滤沙子
    req.sand = 'small';
    res.end('水');
    next();
});
app.get('/water', function (req, res) {
    console.log(req.stone, req.sand); //too big small
    res.end('water');
});
app.get('/food', function (req, res) {
    console.log(req.stone, req.sand); //too big small
    res.end('食物');
});
//错误中间件拥有的哥参数 第一个是error  还有其他三个 所以有四个参数
app.use(function (err, req, res, next) {
    console.log(err); //error  middleware
});
//# sourceMappingURL=7.middleWare.js.map