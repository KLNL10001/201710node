//require加载的是一个模块  模块加载之后会有缓存
/*var user = require('./user.json')
var user1 = require('./user.json')
console.log(user);//[ { name: 'lili' }, { name2: 'lili2' } ]
console.log(user===user1)//true  说明加载的有缓存*/



/*var user = require('./user')
user.lenth = 0
require('fs').writeFileSync('./user.json',"[]")

delete require.catch(require.resolve('./user'))

var user1 = require('./user')
console.log(user1);//[ { name: 'json' }, lenth: 0 ]  说明require有缓存
console.log(user===user1)*/

//path.resolve('./user')得到当前模块的绝对路径  require.resolve('./user')指定模块的绝对路径
var user = require('./user')
user.lenth = 0
require('fs').writeFileSync('./user.json',"[]")
delete require.cache[require.resolve('./user')]
var user1 = require('./user')
console.log(user1);//[] 清除require的缓存
console.log(user===user1)//false











