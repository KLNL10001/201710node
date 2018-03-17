/**
 * Created by zichunli on 18/3/5.
 */
//调用写好的方法
//如果袭击写的文件要通过./的方式,文件模块,如果是js、node、json后缀可以省略，他会自动添加
    //.js、.json、.node会依次匹配 从前向后匹配  也就是先匹配.js
//如果异步方法一般会有回调函数
let Dialog =require('./dialog-ES5')
console.log(1)// 2  1  说明require是同步的
//此时并没有调用Dialog为什么仍然cons可以输出dialog-ES5.js中的 console.log(2)的2呢，因为这里
//是把闭包拷贝过来了  从上到下的执行这个闭包
//console.log(Dialog)//{} 因为此时拿到的是exports空对象


console.log(Dialog)//给exports加一个属性之后  { a: 11 }  exports.a =11;
//
// console.log(Dialog.Dialog)//exports.Dialog = Dialog;
//
// let  dialog = new Dialog.Dialog;
// dialog.$show();//show
//

let Dialog_es6 = require('./dialog-ES6')
console.log(Dialog_es6.title())//标题





