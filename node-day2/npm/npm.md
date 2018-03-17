
## 第三方模块
-第三方包 分为两类一种是全局 一种是本地  也就是说 一种在命令行中用  一种是在代码中使用
-要通过npm来进行安装  npm  node  pacakage manage

#### 全局安装 -g （只能在命令行中使用） 默认的安装路径是 （npm  root -g ） 来看npm全局安装的根路径 : /usr/local/lib/node_modules

、、、

npm install nrm -g
、、、

>npm nrm nvm三个工具
//说明了项目没有关系
-nrm:NPM registry manager  切换npm源
    nrm can help you easy and fast switch between different npm registries, now include: npm, cnpm, taobao, nj(nodejitsu), rednpm.
>nrm   mac版本前边加上 sudo
   npm install -g nrm
   nrm ls ：显示所有的可用源
   nrm use 源的名字 :切换源/使用源
   nrm test:看这个源快不快  测试连接时间越短越快
  但是nrm其实没有直接加入到环境变量中，而是通过npm进行映射
  sudo npm uninstall nrm -g ：删除/卸载

-nvm:是切换node版本

> npm ,nrm ,nvm

#### http-server
-帮我们启动一个本地服务

 、、、

 npm install  http-server -g
 http-server -p 3000(指定端口号)：在某个路径下启动服务：默认端口号8080
 、、、


www.zhufengpeixun.cn/docs/html/index.html  文档的存放位置
 ####idoc  从github上搜idoc，选择:jaywcjlove/idoc

 、、、

 npm install -g idoc
 、、、

 快捷工具测试网页

#### 本地安装

-没有-g参数，安装之前需要初始化，记录安装依赖
、、、

npm init -y（是默认的意思）
、、、

>pacakge.json,目录不能有中文，特殊字符，大写,默认先找当前目录下的package.json,如果当前目录没有会向上级目录查找，找不到才认为
 在当前目录下安装

 >package.json中scripts 可以配置一些快捷键
 packa.json为如下的时候：

   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
 entry point: (1.npm.js):入口文件

➜  npm git:(master) ✗ npm run test
> echo "Error: no test specified" && exit 1
npm ERR! errno 1

配运行的快捷键改为如下：
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

 > node 1.npm.js

> my-project@1.0.0 test /Users/zichunli/Desktop/技术荟萃/1/201710node/node-day2/npm
> node 1.npm.js

1

####项目依赖

-开发时使用，上线还需要

、、、
npm install jquery      //(是在package.json中的dependencise)
安装指定的版本如下：
npm install jquery@(版本号)
npm uninstall jquery
、、、

####开发依赖
-开发时使用，线上不使用

、、、
npm install less --save -dev   //(是在package.json中的devDependencise)

npm uninstall less --save -dev
、、、

####安装全部依赖

npm install

npm安装的package.json  如下

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "node 1.npm.js"
  },
  "author": "",
  "license": "MIT"
}



####等同于npm的另一个工具是yarn，yarn安装，它的好处是有缓存，等价于 cnpm

-npm install -g yarn

facebook 默认是由yarn安装的

yarn  init （初始化）（-y）

生成的 package.json 如下：
{
  "name": "npm",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
####项目依赖：
yarn add jquery

####开发依赖

 yarn add less --dev

 #### 删除：
 yarn remove jquery

 yarn  不能安装全局的

  yarn  install

 #####

 ## 想发布包  发布到如下网站上
 https://npmjs.com
包名：包的名字要有特点而且不要一样

name是在package.json中的name
版本号：version
入口文件：main    //入口文件连接着所有的模块


{
  "name": "npm",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "jquery": "^3.3.1"
  },
  "devDependencies": {
    "less": "^3.0.1"
  }
}

用包：
##步骤：
##-先回到国外：nrm use npm
##-包名不能和已有的包名一致
##-入口文件，做整合用的
##-sign up  注册一个账号   ：npm addUser 如果有账号表示登录,新用户需要校验邮箱
##-npm publish

第七个课件：核心模块
##-使用包  使用包的名字不可以和自己的报名一致
在项目中用这样的包的时候，引用只需要通过名字就可以，其实引入的的是main对应的模块文件
//第三方模块不需要./的形式引入，可以直接通过包名直接将文件引入，找package.json中的main对应的文件运行
//如果当前目录下没有找到，会向上一级查找，找到计算机的根目录为止

核心模块

看es6.ruanyifeng.com 继承

视频缺失了一部分  讲的应该是继承，复习的时候要从网站上把缺失的那一部分找出来看



































