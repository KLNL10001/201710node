json必须是双引号
                                                什么是session

session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上

客户端浏览器访问服务器的时候，复位客户端信息以某种形式记录在服务器航，这就是的三四年。客户端浏览器再次访问时只需要从该Session中查找该客户的
状态就可以了

如果说Cookie机制是通过检查客户身上的通行证来确定客户身份的话，那么session机制就是通过检查服务器上的客户明细表来确认客户身份

session相当于程序在服务器上建立一份客户档案，客户来访的时候只需要查询客户档案就可以了

两者的区别：
。cookie数据存放在客户的浏览器上，session数据放在服务器上
。cookie不是很安全，别人可以分析怒放在本地的COOKIE并进行COOKIE欺骗，考虑到安全应该使用session
。session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能  考虑到减轻服务器性能方面，应当使用COOKIE
。单个Cookie保存的数据不能超过4k，很多浏览器都限制一个站点最多保存20个cookie

所以建议：将登录信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie

session的简单应用
跟cookie一样都需要单独的安装和引用模块，安装模块：
npm install express-session

主要方法就是session(options)，其中options中包含可选参数，主要有：
。name：设置cookie中，保存session的字段名称，默认为connect.sid
.store：session的存储方式，默认存放在内存中，也可以使用redis，mongodb等。express生态中都相应的模块的支持
.secret:通过设置secret字符串，来计算hash值并放在cookie中，使产生的signdeCookie防篡改
。cookie：设置存放session id的cookie的相关选项，默认为（default：{path:'/',httpOnly:true,secure:false,maxAge:null}）
。genid：产生一个新的session_id时，所使用的函数，默认使用uid2这个npm包
。rolling：每个请求都重新设置一个cookie，默认为false
。resave：即使session没有被修改，也报损session值，默认为true
。savaUninitialized：保存新创建但未修改的session







session的步骤：
。在服务器端生成全局唯一标识符(session_id)
。在服务器内存里开辟此session_id对应的数据存储空间
。将session_id作为全局唯一标识符通过cookie发送客户端
。以后客户端再次访问服务器时会把session_id通过请求头中的cookie发送给服务器
。服务器再通过session_id把此标识符在服务器端的数据取出






cookie使用注意事项
。可能被客户端篡改，使用前验证合法性
。不要存储敏感数据  比如永明密码、账户余额
。使用httpOnly保证安全
。尽量减少cookie的体积
。设置正确的domain和path，减少数据传输

session
。会话跟踪，数据存放在服务器端
。需要借助cookie存贮一个会话ID，服务器可以根据会话ID来查询朱详细的session数据


session依赖于cookie

express中的session


app.use(require()




