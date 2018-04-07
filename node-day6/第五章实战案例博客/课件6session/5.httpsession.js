
var http = require('http')
var fs   = require('fs')
var url  = require('url')
var querystring = require('querystring')
var SESSION_KEY='SESSION_KEY'
var sessions={}

http.createServer(function (req,res) {
    res.setHeader('Content-Type',"text/html;charset=utf8")
    var urlObj=url.parse(req.url,true)
    var pathname =urlObj.pathname;
    if (pathname == '/')
     {
         var cookieObj=querystring.parse(req.headers.cookie,';')
         var sessionId = cookieObj[SESSION_KEY]
         console.log('sessionId=',sessionId)
         if (sessionId)
          {
             var sessionObj = sessions[sessionId]
              res.setHeader('Content-Type',"text/html;charset=utf-8")

              //如果有值表示此客户端提交上来的会话ID在服务器端有对应关系
              if(sessionObj)
              {
                  sessionObj.balance = sessionObj.balance-10
                  console.log('sessionObj=',sessionObj)
                  res.end('欢迎你老朋友再次光临，您的余额为:'+sessionObj.balance)
              }
              else
              {
                  res.end('欢迎你老朋友再次光临，但是你得卡不能用了')
              }

         }
         else
         {
             //生成一个新的会话id
             var sid=Date.now()+''+Math.random()
             //在服务器端开辟内存，存放ID对应的数据
             var sessionObj={balance:100}
             sessions[sid]=sessionObj
             //把sid也就是会员卡号写给客户端
             res.setHeader("Set-Cookie",SESSION_KEY+"="+sid)
             res.end('欢迎你新朋友，送你会员课，余额为'+sessionObj.balance)
         }

     }

}).listen(8080)