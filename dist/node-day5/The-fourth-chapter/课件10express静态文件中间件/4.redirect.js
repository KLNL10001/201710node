'use strict';

var express = require('express');

var app = express();

app.listen(8080);

app.get('/', function (req, res) {
    // res.redirect('http://www.baidu.com')
    res.setHeader('Location', 'http://www.baidu.com');
    res.statusCode = 302;
    res.end();
});
//# sourceMappingURL=4.redirect.js.map