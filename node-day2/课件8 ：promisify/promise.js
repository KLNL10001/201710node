let fs=require('fs')//file system
// fs.readFileSync()//
// fs.readFile('./2.es6.js','utf8',function (err,data) {
//     if (err)  return  console.log(err)
//     console.log(data);
// })
//resolve,reject 都是函数
function read() {
    return new Promise((resolve,reject)=>{
        resolve('成功')

    })
}

//promise 用法promise的实例就具备了then方法
read().then(function (data) {
    console.log(data);
},function (err) {
})
//改为如下：
function read(url) {
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
    if (err)  return reject(err)
    return resolve(data);
})
    })
}
//promisify 把一个函数promise化

let  read =util.promisify(fs.readFile)
read(url,'utf8').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
})