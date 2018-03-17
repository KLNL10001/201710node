/**
 * Created by zichunli on 18/3/1.
 */
//在文件中打印this  不是global属性，node自带模块化功能，一个js文件就是一个模块，模块this不是global
//每个文件都有局部作用域，不会将属性挂载在global上，也就是每个文件外面是一个看不见的闭包
console.log(this===global)//false
console.log(this) //{}
var a =1;
console.log(global.a)//undefined

b = 1
console.log(global.b)//1
console.log(global)
//console.info/error/war/log/time/timeEnd

console.time('start')
for(let i=0;i<100;i++)
{}
console.timeEnd('start')//start: 0.080ms  打印时差

//Buffer 缓存区
//clearTimeOut

// clearImmediate setImmediate

//process 进程  设置环境变量

























