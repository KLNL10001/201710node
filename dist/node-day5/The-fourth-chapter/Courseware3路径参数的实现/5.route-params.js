'use strict';

var express = require('express');
var app = express();
app.listen(8080);

// /user?id=1查一个  查所有  路径都是/user 区分查多个还是查一个
app.get('/user', function (req, res) {
    res.end('select all');
});
//表示id是占位符  必须有 但是可以随机 http://localhost:8080/user/1
//  /user/1/2 =>{id:1,name:2} = params 一一对应的关系
app.get('/user/:id/:name', function (req, res) {
    res.end('select one' + req.params.id + req.params.name);
});

var url = '/user/1/2';
var url2 = '/user/:id/:name'; //=>{id:1,name:2}   [id,name]
//将url2转化成一个可以匹配url的正则
//
var arr = [];
var newReg = url2.replace(/:[^\/]+/g, function () {
    arr.push(arguments[0].slice(1)); //[id,name]
    return '([^\/]+)';
});
var reg = new RegExp(newReg);
console.log(reg.test(url)); //true
console.log(reg.exec(url)); //[ '/user/1/2', '1', '2', index: 0, input: '/user/1/2' ]
var newArr = reg.exec(url);
var result = {};
arr.forEach(function (item, index) {
    result[item] = newArr[index + 1];
});
console.log(result); //相当于 req.params { id: '1', name: '2' }
//# sourceMappingURL=5.route-params.js.map