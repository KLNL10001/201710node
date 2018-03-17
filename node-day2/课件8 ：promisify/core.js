/**
 * Created by zichunli on 18/3/6.
 */
let util = require('util')
function Parent() {
    this.smoking ='抽烟'
}
Parent.prototype.sleep='睡觉'
function Child() {
}
util.inherits(Child,Parent)//继承公有
let child = new Child();
console.log(child.sleep);//睡觉



