cookie
在web应用中，多个请求之间共享'用户会话'是非常必要的。但是HTTP协议是无状态的。那这时Cookie就出现了。那Cookie又是如何处理的呢


Cookie的处理:
1、服务器端向客户端发送Cookie
2、客户端 的浏览器把Cookie保存
3、然后再每次请求浏览器都会把Cookie发送到服务器端

在HTML文档呗发送之前，Web服务器通过传送HTTP包头中的Set-Cookie消息把一个cookie发送到用户的浏览器，如下示例：
Set-Cookie:name=value;Path/;expiress=Wednesday,09-Nov-99 23:12:40 GMT

其中比较重要的属性：
