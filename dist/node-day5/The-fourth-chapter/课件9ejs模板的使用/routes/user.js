'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/login', function (req, res) {
    res.send('登陆');
});

router.get('/reg', function (req, res) {
    res.sendFile(path.join(__dirname, '../static/reg.html'));
});

router.post('/reg', function (req, res) {
    // res.render('result.ejs',req.body)
    // res.render('result.html',{...req.body,arr:[1,2,3,4],html:'<h1>我很帅</h1>'})


});

router.post('/login', function (req, res) {});

module.exports = router;
//# sourceMappingURL=user.js.map