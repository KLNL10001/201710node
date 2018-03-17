
let fs = require('fs')
let {promisify} = require('util')
let read = promisify(fs.readFile)

//同步
/*let  x = fs.readFileSync('./x.txt','utf8')
let  y = fs.readFileSync('./y.txt','utf8')
console.log({x,y})//{ x: '我是兹春利', y: '8' }*/

//异步
/*let school ={}
read('./x.txt','utf8').then(data=>{
    school.name = data;
    console.log(data);
},err=>{

})

read('./y.txt','utf8').then(data=>{
    school.age = data;
    console.log(data);
},err=>{

})*/
//将两个异步请求在同一时刻内拿到结果进行合并 这样是无法输出想要的结果的
// console.log(school);

//需要同步输出以上异步的结果，那么如下
//可迭代的数组 调用all方法后，会产生一个新的promise实例
//all是并发
Promise.all([read('./x.txt','utf8'),read('./y.txt','utf8')]).then(function (data) {
    //data是一个数组类型 和前面请求的顺序相同（会把成功后的结果放到数组中）
    //加入其中有一个失败了的话 就走err
    console.log(data);//[ '我是兹春利', '8' ]
}).catch(err=>{

})

async function result() {
     let [name,age]=await Promise.all([read('./x.txt','utf8'),read('./y.txt','utf8')])
    console.log(name,age)//我是兹春利 8
}
result();
//总结promise解决的问题：1、回调地狱，2、同步异步的返回结果也就是合并异步的返回结果 3、asyc，await监护promise的写法（语法糖）

