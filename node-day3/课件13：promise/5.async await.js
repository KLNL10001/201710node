//觉得课件12最后中的代码还是不美观 现在想让它更美观

// read('./1.txt','utf8').then(function(data){
//     read(data,'utf8')
//     {
//         //如果第一个promise中返回了一个promise实例，会把当前执行的结果传到下一个then中,也就是把.then放在了外面
//         return  read(data,'utf8')
//     }
// }).then(function (data) {
//     console.log(data);//你好，我是兹  如果返回的不是promise  会把结果继续向下传
//     return data+'哈哈'
// }).then(function (data) {
//     console.log(data);//你好，我是兹哈哈
// }).catch(()=>{
//     //页面错误统一处理  捕获错误,如果写了错误callback走自己的，如果没有统一走catch
// })
//以上就是流程控制

//觉得课件12最后中的代码还是不美观 现在想让它更美观  更改为如下：终极解决方案
//async await es7语法  node版本至少是7.9+的
//async await   是一对  await后面只能跟随promise
//只有用async修饰的函数才能用await  所以外面得套一层函数
let fs   = require('fs')
let util = require('util')
let read = util.promisify(fs.readFile)
async function   result() {
    let content1    = await read('./1.txt','utf8')
    let  content2 = await read(content1,'utf8')
    let str = content2 + '哈哈'
    console.log(str);//你好，我是兹哈哈
}

result();
//promise  解决了回调地狱  但是也不是能解决所有的问题



