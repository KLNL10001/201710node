let express = require('express')
let path = require('path')


let router = express.Router()

router.get('/mmm/post',function (req,res) {
    res.send('发布文章')
})

router.get('/delete',function (req,res) {
    res.send('删除文章')
})

module.exports=router

