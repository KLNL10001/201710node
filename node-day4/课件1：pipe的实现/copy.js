//每次读取30  读4b  读取第一次就开始写 只能写1b 暂停读取，当调用drain以后恢复读取
let fs = require('fs')
function pipe(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4})
    let ws =fs.createWriteStream(target,{highWaterMark:1})
    //开启可读流
    rs.on('data',function (chunk) {
        if (ws.write(chunk)===false)//可写流不能再继续写入了
        {
            rs.pause()//暂停读取
        }
        ws.on('drain',function () {
            console.log('干了')
            rs.resume()//当 当前读入的内容都写入到了文件中 调用继续读取
        })
    })
    rs.on('end',function () {//当读取完毕  强制将内存中未写完的内容写入到文件中 关闭文件
        ws.end()
    })
}
pipe('2.txt','22.txt')