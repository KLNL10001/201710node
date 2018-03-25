function app() {
    
}
app.middleWare =[]
//每次调用use方法都会把方法存到数组中，默认调用数组的第一项将next方法传递给数组中的函数
//如果调用此函数会继续执行数组中的下一项
app.use = function (cb) {
  this.middleWare.push(cb)
    console.log(this.middleWare)
      /*  [ [Function] ]
        [ [Function], [Function] ]
        [ [Function], [Function], [Function] ]*/
}

app.use(function (req,res,next) {
    console.log(1)
     next();
})
app.use(function (req,res,next) {
    console.log(2)
    next();
})
app.use(function (req,res,next) {
    console.log(3)
})
let index = 0//callback
function next() {
    console.log('index'+index)
    app.middleWare[index++](null,null,next)
}
next()
