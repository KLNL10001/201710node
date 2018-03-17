//每次读取30  读4b  读取第一次就开始写 只能写1b 暂停读取，当调用drain以后恢复读取
let fs = require('fs')
function pipe(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4})
    let ws = fs.createWriteStream(target,{highWaterMark:1})
    rs.pipe(ws)//可读流.pipe(可写流) 会自动调用write和end方法
}
pipe('2.txt','22.txt')
//根据不同路径解析出不同文件  这是路由的概念
