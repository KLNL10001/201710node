## 第三方模块
- 通过npm来进行安装 node package manager
### 全局安装 -g (只能在"命令行"中使用) 默认的安装路径是(npm root -g) 不会自动加入环境变量中 而是通过npm进行映射
```
npm install nrm -g 安装nrm
nrm test 测试链接时间
nrm ls 显示所有的可用源
nrm use 源的名字 使用源
npm uninstall nrm -g 卸载nrm
```

#### http-server
- 帮我们启动一个本地服务
```
npm install -g http-server
http-server -p 3000 在某个路径下启动服务
```

### idoc
```
npm install -g idoc
```

> npm,nrm,nvm

### 本地安装
- 没有-g参数，安装之前需要初始化,记录安装依赖的
```
npm init -y
```

> package.json，目录不能有中文，特殊字符，大写，默认先找当前目录下的package.json，如果当前木没有会去上级查找，找不到才认为在当前目录下安装

> package.json中scripts可以配置一些快捷方式

#### 项目依赖
- 开发时使用，上线还需要
```
npm install jquery@1.8.3
npm uninstall jquery
```

#### 开发依赖
- 开发时使用，线上不使用
```
npm install less --save-dev
npm uninstall less --save-dev
```

### 安装全部依赖
```
npm install
```

## yarn安装
- npm install -g yarn (回家要安装)
```
yarn init
yarn add 包
yarn remove 包 删除包
yarn add less --dev 安装开发依赖
yarn install 安装依赖包
```

## 想发布包
- 先回到国外 nrm use npm
- 包名不能和已有的包一致
- 入口文件，做整合用的
- 注册账号,如果有账号表示登陆，新用户需要校验邮箱
```
npm addUser
```
- 发布
```
npm publish
```








