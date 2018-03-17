let  buf = Buffer.from('世')
console.log(buf.toString('base64'));//5LiW
//把一个汉字的24位转化成4个字节，每个字节只有6位，不足的补0
console.log(buf);//<Buffer e4 b8 96>
//1、把16进制转化成2进制 toString()
console.log(0xe4.toString(2))//11100100
console.log(0xb8.toString(2))//10111000
console.log(0x96.toString(2))//10010110
//如上的3个字节，按照每6位转成一个字节  不足的前面补0  变成如下：
//00111001 00001011 00100010 00010110   这样讲 最大的不超过64  所以叫做base64  对应的只有64个字符
//2、将这些值转成十进制   去可见编码中取值 parseInt(这个方法)
console.log(parseInt('00111001',2))//或者parseInt('0b00111001') 0b代表二进制  57
console.log(parseInt('00001011',2))//11
console.log(parseInt('00100010',2))//34
console.log(parseInt('00010110',2))//22
let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
str+='abcdefghijklmnopqrstuvwxyz'
str+='0123456789'
str+='+/'
console.log((str[57]+str[11]+str[34]+str[22]).toString())//5LiW
//toString ：把任意进制转成任意进制    parseInt：把十进制转成任意进制




