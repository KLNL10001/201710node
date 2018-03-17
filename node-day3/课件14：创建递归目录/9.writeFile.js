
//读取的类型都是buffer，写入的是utf8
//读取的文件必须存在，写的时候文件不存在会自动创建，里面有内容会覆盖，即会被清空再创建

let fs = require('fs')

fs.writeFile('1.txt',1)
fs.writeFile('1.txt',Buffer.from('zichunli'))
//默认会调用 toString()方法
fs.writeFile('1.txt',{name:'zichunli',age:8})//[object Object]
fs.writeFile('1.txt','{name:"zichunli",age:8}')//{name:"zichunli",age:8}  相当于调用了stringf方法

fs.writeFile('1.txt','{name:"zichunli",age:8}',function (err) {
    console.log(err);
})

fs.writeFileSync('1.txt','{name:"zichunli",age:8}')



