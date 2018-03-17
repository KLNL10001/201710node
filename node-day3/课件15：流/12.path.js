let path = require('path')
//拼一个
console.log(path.join('./a', './b'));
//解析一个绝对路径出来
console.log(path.join(__dirname,'./b', '..'));///Users/zichunli/Desktop/技术荟萃/1/201710node/one-day3/课件15：流
console.log(path.delimiter);//环境变量分隔符  :
console.log(path.posix.sep);//    /   系统分隔符

//流是基于事件的  node里面自带发布订阅模式







