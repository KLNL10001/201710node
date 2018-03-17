/**
 * Created by zichunli on 18/3/5.
 */

//写一个求和方法

/*function sum(...args) {
 //这是一个数组的用法
 return args.reduce((prev,next)=> prev+ next)
 }*/
let  sum=(...args)=>args.reduce((prev,next)=>prev+next)
// console.log(sum(1, 2, 3, 4, 5));//15
console.log(1);
module.exports = sum //第一种写法
//exports.b = sum;  第二种写法  等同于 module.exports.b = sum

//作为全局属性  一般不这样做 这样做破坏了闭包
 global.sum=sum;

