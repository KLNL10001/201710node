/**
 * Created by zichunli on 18/3/6.
 */
let str = require('vue-plus')

//第三方模块不需要./的形式引入，可以直接通过包名直接将文件引入，找package.json中的main对应的文件运行
//如果当前目录下没有找到，会向上一级查找，找到计算机的根目录为止,按照如下路径找所引用的模块

console.log(module.paths)

    // [ '/Users/zichunli/Desktop/技术荟萃/1/201710node/node-day2/npm/node_modules',
    // '/Users/zichunli/Desktop/技术荟萃/1/201710node/node-day2/node_modules',
    // '/Users/zichunli/Desktop/技术荟萃/1/201710node/node_modules',
    // '/Users/zichunli/Desktop/技术荟萃/1/node_modules',
    // '/Users/zichunli/Desktop/技术荟萃/node_modules',
    // '/Users/zichunli/Desktop/node_modules',
    // '/Users/zichunli/node_modules',
    // '/Users/node_modules',
    // '/node_modules' ]
