//1、回调地狱 链式写法then
//2、解决同步异步的结果 Promise.all,如果都成功才算成功，有一个失败就失败了 .Promise.race()
let fs = require('fs')
let {promisify} = require('util')
let read = promisify(fs.readFile)

//谁快以谁稳准  得到结果以后就结束了
/* Promise.race([read('./x.txt','utf8'),read('./y.txt','utf8')]).then(data=>{
     console.log(data);//我是兹春利
 },err=>{
     console.log(err);
 })

Promise.race([read('./x.txt','utf8'),read('./3.txt','utf8')]).then(data=>{
    console.log(data);
},err=>{
    console.log(err);//{ Error: ENOENT: no such file or directory, open './3.txt' errno: -2, code: 'ENOENT', syscall: 'open', path: './3.txt' }
})*/
//

//Promise类上拥有两个方法 可以把结果包装成promise对象  reject 和 resolve（上来就失败或者成功）
//阮一峰博客中专门有一节试讲Promise的

Promise.reject('123').then(function (data) {
    return data+456
}).then(function (data) {
     console.log(data);
}).catch(err=>{
   console.log(err)//123
})

/*Promise.resolve('123').then(function (data) {
    return data+456
}).then(function (data) {
    console.log(data);//123456
})*/
//同步异步的选择  只开始执行一次 可以同步  http服务只能用异步
//readFile会把内容读到buffer也就是内存中    用这种凡是会导致淹没可用内存












