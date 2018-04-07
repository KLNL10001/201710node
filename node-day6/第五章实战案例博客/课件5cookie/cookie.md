Cookie
在web应用中，多个请求之间共享'用户会话'是非常必要的。但是HTTP协议是无状态的。那这时Cookie就出现了。那Cookie又是如何处理的呢

Cookie的处理:

1、服务器端向客户端发送Cookie
2、客户端 的浏览器把Cookie保存
3、然后再每次请求浏览器都会把Cookie发送到服务器端

在HTML文档呗发送之前，Web服务器通过传送HTTP包头中的Set-Cookie消息把一个cookie发送到用户的浏览器，如下示例：
Set-Cookie:name=value;Path/;expiress=Wednesday,09-Nov-99 23:12:40 GMT
其中比较重要的属性：
name=value:键值对，可以设置保存的 Key/Value，注意这里的name不能和其他属性项的名字一样
Expires:过期时间（秒），在设置某个时间点后该Cookie就会失效  这是绝对时间  是浏览器的绝对时间
maxAge:最大失效时间（毫秒），设置在多少后失效  这是相对时间
secure:当secure值为true时，cookie在HTTP中无效，在HTTPS中才有效
Path：表示cookie影响到的路由，如path=/。如果路径不能匹配时，浏览器则不发送这个cookie
httpOnly:是微软对COOKIE做的扩展。如果COOKIE中设置了"httpOnly"属性，则通过程序(JS
脚本、applet等)将无法读物到COOKIE信息，防止XSS攻击产生。
domain:域名，默认是当前域名

http中的cookie
nodejs是如何向客户端发送cookie的呢？有两种方案：
使用response.writeHead,代码人如下：
//设置过期时间为1分钟

var time = (new Date.getTime()+60*1000).toGMTString();

使用response.writeHead(200,{'Set-Cookie':name=lili;path=/;Expires='+time})

缺点：使用response.writeHead只能发送一次头部，即只能调用一次，且不能与fesponse.render共存，否则会报错

还可以使用response.setHeader,代码如下：

response.setHeader(200,{'Set-Cookie':name=lili;path=/;Expires='+time})

school.zhufengpeixun.cn/course/47/learn#lesson/435
其中比较重要的属性：


express中使用cookie
express在4.x版本之后，管理session和cookie等许多模块都不再直接包含在express中，而是需要单独下载安装响应模块
cookieParser安装：
npm install cookie-parser
用法
