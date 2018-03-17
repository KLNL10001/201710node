//fileSystem 是内置模块  文件系统  文件的读写
let fs = require('fs')
//既有同步又有异步，异步有callback
//同步的读取
//1、读取文件  文件必须存在。不能通过/读取内容 /表示的是根目录
//2、读取的默认类型是Buffer
let  result=fs.readFileSync('3.fs.js')//
// console.log(result);//<Buffer 2f 2f 66 69 6c 65
// //读出来的就是字符串
let  result1=fs.readFileSync('3.fs.js','utf8')
// console.log(result1);//这样就是字符串

//第一次的输出是第二次的输入
let content1 = fs.readFileSync('./1.txt','utf8')
let content2 = fs.readFileSync(content1,'utf8')
//异步的方案 会导致回调地狱，不方便维护，promise来解决这个问题
fs.readFile('./1.txt','utf8',function (err,data) {//错误一定是是第一个参数
    if (err) return  console.log(err)
    fs.readFile(data,'utf8',function (err,data) {
        // console.log(data)//你好，我是兹
    })
})
//promise resolve成功  reject  失败  实例上有个then方法  方法中有两个参数   sucecess  error
//只有promise的实例才能.then()  以下为自己封装promise
/*function read (url) {
    return  new  Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',function(err,data){
            if (err) return reject(err);
            return resolve(data)
        })
    })
}

read('./1.txt').then(function(data){
    console.log(data);
},function(err){
    console.log(err);

})*/
//以下为改造后的  提供了工具包改善以上问题
let util = require('util')
let read = util.promisify(fs.readFile)
/*read('./1.txt','utf8').then(function(data){
    console.log(data);
},function(err) {
    console.log(err);
})*/

/*read('./1.txt','utf8').then(function(data){
    read(data,'utf8').then(function (data {

    })
}).catch(()=>{
    //页面错误统一处理  捕获错误,如果写了错误callback走自己的，如果没有统一走catch
})*/
//变成如下

read('./1.txt','utf8').then(function(data){
    read(data,'utf8')
    {
        //如果第一个promise中返回了一个promise实例，会把当前执行的结果传到下一个then中,也就是把.then放在了外面
        return  read(data,'utf8')
    }
}).then(function (data) {
    console.log(data);//你好，我是兹  如果返回的不是promise  会把结果继续向下传
    return data+'哈哈'
}).then(function (data) {
    console.log(data);//你好，我是兹哈哈
}).catch(()=>{
    //页面错误统一处理  捕获错误,如果写了错误callback走自己的，如果没有统一走catch
})
//以上就是流程控制


















