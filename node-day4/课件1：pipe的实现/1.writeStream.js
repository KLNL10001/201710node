let fs = require('fs')
// let ws =fs.createWriteStream('1.txt')
//
// console.log(ws);//highWaterMark: 16384, 可写流默认占用内存是16k
//以下为打印内容
// WriteStream {
//     _writableState:
//         WritableState {
//         objectMode: false,
//             highWaterMark: 16384,
//             finalCalled: false,
//             needDrain: false,
//             ending: false,
//             ended: false,
//             finished: false,
//             destroyed: false,
//             decodeStrings: true,
//             defaultEncoding: 'utf8',
//             length: 0,
//             writing: false,
//             corked: 0,
//             sync: true,
//             bufferProcessing: false,
//             onwrite: [Function: bound onwrite],
//         writecb: null,
//             writelen: 0,
//             bufferedRequest: null,
//             lastBufferedRequest: null,
//             pendingcb: 0,
//             prefinished: false,
//             errorEmitted: false,
//             bufferedRequestCount: 0,
//             corkedRequestsFree:
//         { next: null,
//             entry: null,
//             finish: [Function: bound onCorkedFinish] } },
//     writable: true,
//         domain: null,
//         _events: { finish: { [Function: bound onceWrapper] listener: [Function] } },
//     _eventsCount: 1,
//         _maxListeners: undefined,
//         path: '1.txt',
//         fd: null,
//         flags: 'w',
//         mode: 438,
//         start: undefined,
//         autoClose: true,
//         pos: undefined,
//         bytesWritten: 0 }

//可写流有两个方法 write  end

let ws = fs.createWriteStream('./1.txt',{highWaterMark:2})
// console.log(ws);
//用可写流来写数据 用字符串或者Buffer类型
// ws.write(1)//TypeError: Invalid non-string/buffer chunk
/*ws.write('1')
ws.write('2')
ws.write('3')//123我吃饱了
ws.end('我吃饱了')//111我吃饱了*/
// ws.write('2')//write after end  调用end后不能再用write

//其实它是异步的

let flag1 =ws.write(1+'')  //true
let flag2 =ws.write(1+'')  //false
let flag3  = ws.write(1+'') //false
console.log(flag1);
console.log(flag2);
console.log(flag3);
ws.end('吃饱了')//end调用后会把所有的write中的内容以最快的速度写入文件
ws.on('drain',function () {//当读入的文件全部写入后就恢复读取
    console.log('吃完了')
})

//300k
//每次读取64k  读5次  读取第一次就开始写 只能写16k 暂停读取，当调用drain







