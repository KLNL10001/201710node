/**
 * Created by zichunli on 18/3/6.
 */

//继承方式
function Parent() {
    this.smoking ='抽烟'
}

Parent.prototype.sleep='睡觉'

function Child() {
}

function  create(proto) {
    let  Fn = function () {//创建一个空类，把传进来的原型  赋给此类
        Fn.prototype= proto
    }
    return new Fn()// 返回只拥有传进来的公有属性的实例
}
//这是es6的继承
//只继承公有
// Object.setPrototypeOf(Child.prototype,Parent.prototype)
//Child.prototype.__proto__ = Parent.prototype;//间接继承，链接到父亲上
// let child = new Child();
//es5的继承
Child.prototype = Object.create(Parent.prototype)//公有属性
let child = new Child();
console.log(child.sleep);//睡觉
//继承私有+继承公有

