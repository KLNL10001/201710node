'use strict';

var express = require('express');
var app = express();
app.listen(3000);
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//静态文件中间价
app.use(express.static(__dirname)); //__dirname是当前目录
app.get('/', function (req, res) {
    res.sendFile('./index.html', { root: __dirname });
});
//# sourceMappingURL=express-server.js.map