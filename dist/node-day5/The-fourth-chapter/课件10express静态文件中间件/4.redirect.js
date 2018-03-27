'use strict';

var express = require('express');

var app = express();

app.listen(8080);

app.get('/', function (req, res) {
    res.redirect('http://www.baidu.com');
});
//# sourceMappingURL=4.redirect.js.map