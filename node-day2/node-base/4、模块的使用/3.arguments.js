// console.log(ccc)//这是绝对的第一行  包括注释 打印出来(function (exports, require, module, __filename, __dirname) { console.log(ccc)
/**
 * Created by zichunli on 18/3/2.
 */
//在第一行的时候
// console.log(ccc)//ReferenceError: ccc is not defined
console.log(arguments)
//1、exports 2、require 3、本模块 module  4、当前文件的文件名__filename()  5、当前文件路径名__dirname
//这五个参数可以直接使用
//模块化（闭包）是由闭包实现的  单例模式
//在js中以下就是个单例  不能保证一定不冲突  导致调用过长
//闭包：CMD seajs就近依赖  AMD requirejs 依赖前置
// 实现了浏览器端的模块化
//规范：commonjs 文件的多谢  通过读写来操作，node天生自带模块化
//1、定义如何创建一个模块  一个js文件就是一个模块
//2、如何使用一个模块  require  你要使用一个文件只需要require一个文件
//3、如何导出一个模块  exports/module.exports
var obj={}

//exports 模块化的好处是 低耦合  高内聚 比较实际的说法是 方便维护，防止代码冲突（命名冲突）





//console.log(arguments)
/*{ '0': {},
    '1':
    { [Function: require]
        resolve: [Function: resolve],
        main:
            Module {
        id: '.',
            exports: {},
        parent: null,
            filename: '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/3.arguments.js',
            loaded: false,
            children: [],
            paths: [Array] },
        extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
        cache: { '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/3.arguments.js': [Object] } },
    '2':
    Module {
    id: '.',
        exports: {},
    parent: null,
        filename: '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/3.arguments.js',
        loaded: false,
        children: [],
        paths:
    [ '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/珠峰/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/node_modules',
        '/Users/zichunli/Desktop/node_modules',
        '/Users/zichunli/node_modules',
        '/Users/node_modules',
        '/node_modules' ] },
    '3': '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/3.arguments.js',
    '4': '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2' }*/




