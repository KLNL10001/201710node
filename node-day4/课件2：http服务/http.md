
request：
POST(方法)  /node/index.htm(URL)   HTTP/1.1（协议版本）

下面为：请求首部字段
Host:zhufengpeixun.cn
Connection:keep-alive
Content-Type:application/x-www-form-urlencoded  //请求的内容格式：form表单
Content-Length:16

name=zfpx&age=6  //请求体

//根据不同路径解析出不同文件  这是路由的概念

get请求是通过路径传参  url有限制
post是请求体来传参  请求体无限制

response：

HTTP/1.1（协议版本） 200(状态码) OK(状态码的原因短语)

以下为响应的首部字段

Date:Mon Mar 12 16:15:45 CST 2018
Content-Length:362
Content-Type:text/html

常见的状态码
200  401：找不到   301   301   403：禁止  502：负载均衡  挂掉了  204

 这样一来一回就是一个完整的请求

 2.1发送请求
 .浏览器（或其他客户端如微信）向服务器发一个http请求
 .先把 域名解析为IP地址(chrome缓存1分钟（chrome://net-internals/#dns）->搜索操作系统缓存->读取本地host文件->发起DNS系统调用->运营商DNS缓存)
 .客户端通过随机端口向服务器发起TCP三次握手，建立了TCP连接
 .连接建立后浏览器就可以发送HTTP请求了
 .服务器收到HTTP请求，解析请求的路径和参数，Jing过后台的一些处理后 完成完整响应页面
 .服务器讲生成的页面作为HTTP响应体，根据不额欧诺个处理结果生成响应头，发回给客户端

 2.2得到响应
 .客户端（浏览器）接收到HTTP响应，从请求中得到HTTP响应体中的HTML代码，于是对HTML代码开始解析
 .解析过程中遇到引用的服务器上的资源（额外的CSS、JS代码，图片，音频，附件等）再向服务器发送请求
 .浏览器解析HTML包含的内容，用得到的CSS代码进行外观上的进一步渲染，JS代码也可能会对外观进行一定的处理
 .当用户与页面交互（点击，悬停等等）时，JS代码对此作出一定的反应，添加特效与动画


