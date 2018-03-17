//发布订阅
//on是订阅  emit是发布
let EventEmitter =  require('events')

let {inherits}   =  require('util')

function Girl() {

}

inherits(Girl,EventEmitter)

let girl = new Girl()

/*girl.on('失恋',function () {//订阅 {'失恋':[cry,eat]}
    console.log('哭')
})
girl.once('失恋',function () {//once触发一次后从数组中删除
    console.log('吃');
})
girl.removeAllListeners
girl.removeListener("失恋",function () {
    console.log('哭')
})
girl.emit('失恋')
girl.emit('失恋')*/

// 加参数如下:

/*girl.on('失恋',function (param) {
    console.log('哭',param)//哭 我
})
girl.emit('失恋','我')*/

//把函数提取出来 如下：
let fn = function (param) {
    console.log('哭',param);//哭 我
}

girl.on('失恋',fn)
girl.removeListener('失恋',fn)
girl.emit('失恋','我')
girl.emit('失恋','我')




