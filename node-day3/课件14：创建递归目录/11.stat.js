
let fs = require('fs')
//stat
// fs.stat('/',function (err,stat) {
//     if (err){/*文件不存在*/}
//     console.log(stat.isFile())//判断是不是文件
//     console.log(stat.isDirectory())//判断是不是文件夹
//
// })
//
// fs.mkdir('a/b/c/d',function (err) {//父目录不存在 则不能创建
//     console.log(err);//{ Error: ENOENT: no such file or directory, mkdir 'a/b/c/d' errno: -2, code: 'ENOENT', syscall: 'mkdir', path: 'a/b/c/d' }
// })

//mkdir -p a/b  命令：循环创建
function makep(url,callback) {//插入排序
   let urlArr = url.split('/');
    console.log(urlArr);//[ 'a', 'b', 'c', 'd' ]
    let index = 0 ;
    function make(p) {
        if (urlArr.length<index) return;//终止循环
        //在创建之前判断是否存在  如果不存在创建  存在继续下一次创建
        console.log('输出p='+p);
        fs.stat(p,function (err) {
            if(err)
            {
                fs.mkdir(p,function (err) {
                    if (err) console.log(err);
                     make(urlArr.slice(0,++index+1).join('/'))
                })
            }
            else//如果存在  跳到下一次创建
            {
                make(urlArr.slice(0,++index+1).join('/'))
            }
        })
    }
     make(urlArr[index])
}

makep('a/b/c/d',function (err) {
    console.log("创建成功")
})

    // atime:access time
    // mtime: modify time
    // ctime: change time
    // birthtime:

/*null Stats {
    dev: 16777220,
        mode: 16877,
        nlink: 32,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: 4096,
        ino: 2,
        size: 1156,
        blocks: 0,
        atimeMs: 1520580602000,
        mtimeMs: 1493635630000,
        ctimeMs: 1493635630000,
        birthtimeMs: 1468037869000,
        atime: 2018-03-09T07:30:02.000Z,accs
        mtime: 2017-05-01T10:47:10.000Z,
        ctime: 2017-05-01T10:47:10.000Z,
        birthtime: 2016-07-09T04:17:49.000Z }*/
