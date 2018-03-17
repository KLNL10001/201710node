/**
 * Created by zichunli on 18/3/5.
 */
//写好的方法
//类 大写的就是方法

function Dialog() {

    this.time =3000;
}
Dialog.title='弹框'//只能类调用
Dialog.prototype.$show = function () {
    console.log('show')
}

Dialog.prototype.$hide = function () {
    console.log('hide')
}
console.log(2)

new Dialog().$show()
// new Dialog.$show()

// console.log(arguments[0])//{}  其实就是exports

// exports.a =11;
//但是想拿到的并不是值 而是dialog 那么 就如下

 //exports.xxx = Dialog; 给exports赋予属性可以导致module.exports对象的变化

module.exports=Dialog;//直接改变module.exports的指向
//最终导出的是module.exports

//为什么exports之后就可以呢？因为闭包做了如下的工作
/**

 (function (exports,module,require)){

  module.exports = exports =this ={}

 写的代码


    function Dialog() {

        this.time =3000;
    }
    Dialog.title='弹框'//只能类调用
    Dialog.prototype.$show = function () {
        console.log('show')
    }

    Dialog.prototype.$hide = function () {
        console.log('hide')
    }
    console.log(2)

    new Dialog().$show()

    exports.Dialog = Dialog;

//默认导出的是module.exports
    return module.exports


 }()

**/
