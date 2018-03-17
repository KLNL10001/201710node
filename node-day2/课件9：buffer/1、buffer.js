/**
 * Created by zichunli on 18/3/7.
 */

//let不允许重命名  var是可以被重命名的
let buffer = Buffer.alloc(10)//10个字节  相对这种方法比较耗性能  这个是把以前的内存给清空
console.log(buffer);//<Buffer 00 00 00 00 00 00 00 00 00 00>

let buffer3 = Buffer.allocUnsafe(10)//<Buffer 00 00 00 00 00 00 00 00 50 d3>没有清空以前的内存
console.log(buffer3);

let buffer1 = Buffer.from([11,12,0x11,4])
console.log(buffer1);//<Buffer 0b 0c 11 04> 会自动把十进制转化成16进制


let  buffer2 = Buffer.from('哈哈你啊')//<Buffer e7 8f a0 e5 b3 b0 e5 9f b9 e8 ae ad>  12个字节 也说明了一个汉字是3个字节
console.log(buffer2);
console.log(buffer2.length);//12  转换为buffer后长度为buffer的长度

//Buffer可以和字符串相互转化
console.log(buffer2.toString());//哈哈你啊
//Buffer就是在内存中分配的空间

//Buffer常用方法
//fill
var buff = Buffer.allocUnsafe(10);
console.log(buff.fill(1));//<Buffer 01 01 01 01 01 01 01 01 01 01>
//slice截取 克隆：是浅拷贝
//深拷贝：两个人长得一样，但是毫无关系
//浅拷贝：两个对象中存放的空间是一样的

var obj = {a:1}
var arr = [obj,3,4];
var newArr = arr.slice(0)
 arr[0].a = 9
console.log(newArr)//[ { a: 9 }, 3, 4 ]


// Object.assign()//也是浅拷贝
//{...{},...{}}也是浅拷贝

// JSON.stringify()//是深拷贝
//JSON.parse()//是深拷贝 却显示不支持函数
 var obj = {name:'hello',a:function () {

 }}

 var  newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);//{ name: 'hello' }  把函数丢了








































