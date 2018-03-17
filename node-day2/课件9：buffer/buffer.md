TCP靠的是二进制
Buffer是十六进制
node把二进制转化成了16进制，node是看不见二进制的
//Buffer是对二进制的操作，Buffer的大小需要提前确定，存放的最小单位是字节

b代表的是字节
bit位
1b=8bit
1个汉字=3b(utf8格式的汉字)
1k =1024b
0b01二进制的1
一个字节转化成十进制最多是255 也就是8个1
0x是十六进制  255是 = 0xff
也就是一个字节在buffer中存储的格式如下：
<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
8进制是以零开头 010=
一个字节最大转换成16进制是ff
通过长度定义buffer
let buffer = Buffer.alloc('6')
let buffer = Buffer.allocUnsafe(6)
通过数组定义buffer
let buffer = Buffer.from([1,2,3,4])
通过字符串定义buffer
let buffer =    Buffer.from('珠峰培训');
















