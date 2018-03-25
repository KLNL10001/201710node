'use strict';

var express = require('express');
var app = express();
app.listen(8080);

app.use(function (req, res, next) {
    var t = new Date().getTime(); //访问最初的时间
    var end = res.end; //这个是保留的以前的end
    res.end = function () {
        // console.log(arg)
        console.log(new Date().getTime() - t);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        end.call.apply(end, [res].concat(arg));
    };
    next();
});

app.get('/water', function (req, res) {

    for (var i = 0; i < 10; i++) {}
    res.end('water'); //装饰模式
});
app.get('/food', function (req, res) {

    for (var i = 0; i < 100; i++) {}
    res.end('food');
});
//# sourceMappingURL=8.middle.js.map