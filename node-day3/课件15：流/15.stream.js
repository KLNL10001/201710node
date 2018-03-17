//流是基于时间的可读流和可写流
//流边读边写  可解决内存淹没的问题  不是疯狂的读
let fs = require('fs')

//highWaterMark 每次能读取多少 默认是64k  我们默认不需要更改
/* let rs = fs.createReadStream('1.txt')//    options.highWaterMark = 64 * 1024;  默认读取的是Buffer
rs.on('data',function (chunk) {
    console.log(chunk);//<Buffer 31 32 33 34 35 36 37 38 39 30>

})*/

// 改为如下:
// let rs = fs.createReadStream('1.txt',{highWaterMark:1})
let rs = fs.createReadStream('2.txt',{highWaterMark:1})
/*rs.on('data',function (chunk) {
    console.log(chunk);
    //结果如下：
    // <Buffer 31>
    // <Buffer 32>
    // <Buffer 33>
    // <Buffer 34>
    // <Buffer 35>
    // <Buffer 36>
    // <Buffer 37>
    // <Buffer 38>
    // <Buffer 39>
    // <Buffer 30>
})*/

// rs.emit('data')//名字固定为'data'
//默认叫做非流动模式 =》流动模式

// console.log(rs);

/*ReadStream {
    _readableState:
        ReadableState {
        objectMode: false,
            highWaterMark: 65536,
            buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
            pipes: null,
            pipesCount: 0,
            flowing: null,
            ended: false,
            endEmitted: false,
            reading: false,
            sync: true,
            needReadable: false,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            destroyed: false,
            defaultEncoding: 'utf8',
            awaitDrain: 0,
            readingMore: false,
            decoder: null,
            encoding: null },
    readable: true,
        domain: null,
        _events: { end: [Function] },
    _eventsCount: 1,
        _maxListeners: undefined,
        path: '1.txt',
        fd: null,
        flags: 'r',
        mode: 438,
        start: undefined,
        end: undefined,
        autoClose: true,
        pos: undefined,
        bytesRead: 0 }*/
//流的方法全是异步
// rs.on('end',function () {
//     console.log('end')
// })

//想把数据串起来 修改如下：
/*let str = ''
rs.on('data',function (chunk) {
    str+=chunk
    console.log(chunk)

})

rs.on('end',function () {
    console.log(str);//1234567890
})*/

//如果改为读2.txt  则结果全部为问号    则修改为如下：
let arr =[];
/*rs.on('data',function (chunk) {
    arr.push(chunk)
})

rs.on('end',function () {
    console.log(Buffer.concat(arr).toString())//春利
})*/

rs.on('err',function () {
    //文件不存在或者错误
})
//暂停如下：
rs.on('data',function (chunk) {
    arr.push(chunk)
    console.log(chunk);
    rs.pause()//暂停的是on('data')的触发
    setTimeout(function () {
        rs.resume()//恢复事件的触发
    },1000)
})
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString())//春利
})
//on('data') on('err') on('end')  pause()   resum()