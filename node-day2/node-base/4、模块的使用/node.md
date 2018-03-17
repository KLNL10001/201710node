课件1   什么是node

##node安装
-https://nodejs.org/en/
node 中文版网址：http://nodejs.cn
##mac homebrew
-brew install node
安装后重洗启动cmd命令行，

工具NVM  for  mac是node的版本管理工具，使得一台电脑可以同时安装好几个版本
nvm-win
node是一个运行环境
默认的有配置环境变量的过程
-add to path
我的电脑（右键）->属性->环境变量->path
在窗口上输入命令 node后 需要control+c两下才能退出
在windows电脑的在命令行中输入node实际上是运行的node.exe，然后就会去环境变量的路径里找node.exe，关掉命令行，然后输入命令，如果能找到的话就能运行，这是原理

 课件2  区分环境变量

 node不支持html格式的，node是服务端，是js跑的服务端的环境，
 运行一个js文件：node  文件名

 配置webstorm：

Preference->搜索node 然后点击Enable，就会出现node提示

  配置 ECMAScript 6 环境
Preference->搜索language  然后在右侧栏点击Javascript，选择  ECMAScript 6，这样写一些高级的函数就不会报错了

断点跟踪会打印出环境变量和global属性

##nodejs的特点
nodejs的

什么是回调

-主线程是单线程（异步），只有一个调用栈，callback是将后续的逻辑写入函数，传入到当前执行的函数，当执行的函数得到了结果后，
执行传入的函数（回调函数）

##web异步
 -setTimeout
 -callback
 -onclick
 -ajax

同步和异步
同步是指发起调用之后主线程只能挂起，调用者主动等待这个调用结果
异步是指发起调用之后主线程可以做别的事情，被调用者通过通知来告知调用者

什么是阻塞/非阻塞
针对内核来说的，向内核发起请求的时候不会阻塞主线程的执行
非阻塞是实现异步的前置条件

-阻塞就不能异步了

nodejs 主线程是单线程  解决了大量的内存

-什么是I/O操作   读写操作  异步读写（能用异步就不要用同步）

-event-driven 事件驱动（发布订阅）


队列
当前队列
异步队列
//全局变量  可以不声明直接使用
webstorm可以分屏使用






































