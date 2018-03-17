/**
 * Created by zichunli on 18/3/2.
 */

//process 进程  设置环境变量
//自动切换url

// console.log(process.env.NODE_ENV)
//在命令行里配置NODE_ENV  mac  和windows不一样
// mac exports、window set
//mac 进入工程目录下 输入命令export NODE_ENV=dev  相当于在环境中加入dev属性
// 需要在webstorm中设置环境变量
//右上角的运行左边的文件名  然后点击Edit Configuration  然后点击环境变量后面的按钮 设置为env.NODE_ENV   dev 点击加号
//如果代码放到服务器上，那就没有此环境变量，取不到可以走上线环境

let url
if (process.env.NODE_ENV=='dev')
{
    url ='http://localhost:3000'
}
else
{
    url ='http://www.zhufengpeixun.cn'
}

// console.log(url)//http://localhost:3000

//以下为课件3的内容

//node有当前小本和下一个小本
//异步  当前小本的底部 也就是当前队列的底部  也就是执行完同步代码之后优先执行的代码都放在nextTick()中执行
process.nextTick(function () {
    // console.log('nextTick')
    // console.log(this)//this指向global
});//下一个队列
// console.log(url)//则先输出url  再输出nextTick

//这个是属于第二个小本 第二个小本中  nextTick  setImmediate之前
setImmediate(
    function () {
        // console.log('setImmediate')
         // console.log(this)//this指向它自己 Immediate
    }
)
//在第二个小本中 执行先后和setImmediate 看情况而定
setTimeout(
    function () {
        // console.log('setTimeout')
        // console.log(this)////this指向的是Timeout自己  Timeout
    }
)

//所以写代码的时候最好是用箭头函数 防止变成它自己
//箭头函数中没有this指向没有arguments

setTimeout((b,c)=> {//形参
    console.log(this)//{} this看的不是在哪儿定义的 而是什么时候调用的
    console.log(b)
    console.log(c)//字码
    console.log(arguments.length)//并不是setTimeOut的参数个数 而是它上一级的  是外层闭包的参数
},100,'吃饭','字码')//第三个参数传实参

//剩余运算符  将剩余的内容放到数组中
setTimeout((...args)=> {
    console.log(args.length)//2
    console.log(args)//[ '吃饭', '当然吃了' ]
    console.log(args[1])//当然吃了

},100,'吃饭','当然吃了')

//...写在形参中代表的是剩余运算符，其他的时候叫做展开或者拓展运算符 ...是ES6的语法
console.log([ ...[1,2,3,], ...[4,5,6]])//[ 1, 2, 3, 4, 5, 6 ]

//8.5以上的  这是ES7的语法
console.log({...{school:'zfpx'},...{age:8}})//{ school: 'zfpx', age: 8 }

// global-全局变量
// 全局变量在所有模块中均可使用。但以下变量的作用域只在模块内
// __dirname
// __filename
// exports
// module
// require()

















