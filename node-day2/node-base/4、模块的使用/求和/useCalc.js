/**
 * Created by zichunli on 18/3/5.
 */

//在这里调用求和方法

let calc = require('./calc')
require('./calc')
require('./calc')
require('./calc')
require('./calc')//虽然调用了多次，但是console.log(1); 多次引用 只执行了一次
//因为有缓存  cache: 缓存到了require中

console.log(require);

/*{ [Function: require]
    resolve: [Function: resolve],
    main:
        Module {
    id: '.',
        exports: {},
    parent: null,
        filename: '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/useCalc.js',
        loaded: false,
        children: [ [Object] ],
        paths:
    [ '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/珠峰/node_modules',
        '/Users/zichunli/Desktop/技术荟萃/node_modules',
        '/Users/zichunli/Desktop/node_modules',
        '/Users/zichunli/node_modules',
        '/Users/node_modules',
        '/node_modules' ] },
    extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
    cache:
    { '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/useCalc.js':
        Module {
        id: '.',
            exports: {},
        parent: null,
            filename: '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/useCalc.js',
            loaded: false,
            children: [Array],
            paths: [Array] },
        '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/calc.js':
        Module {
        id: '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/calc.js',
            exports: [Function: sum],
        parent: [Object],
            filename: '/Users/zichunli/Desktop/技术荟萃/珠峰/201710node/node-day2/4、模块的使用/求和/calc.js',
            loaded: true,
            children: [],
            paths: [Array] } } }*/

// console.log(calc(1,2,3,4,5))//15
// console.log(calc.b(1,2,3,4,5,5));//20

console.log(sum(1, 2));//3