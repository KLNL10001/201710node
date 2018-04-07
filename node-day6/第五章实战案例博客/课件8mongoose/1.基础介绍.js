/**
 * Created by zichunli on 18/4/7.
 */

var mongoose = require("mongoose")
   mongoose.connect("mongodb://localhost:27017/test1")

var db = mongoose.connection;

db.on("error",function (error) {
    console.log('数据库连接失败'+error)
})

db.on('open',function () {
    console.log('数据库连接成功')
})

//数据库集合结构定义
var PersonSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});

//定义一个数据库操作模型
var PersonModel =mongoose.model('person',PersonSchema)

//创建实体  实可以操作数据库
var personEntity = new PersonModel({
    name:'lili',
    age:6,
    email:1234567890,
    sex:1,
    score:'iiii'
})


console.log(personEntity.name)
console.log(personEntity.age)

//把当前的实体保存到数据库中  集合是复数  所以把集合的名字自动保存为people
personEntity.save(function (error,doc) {
    if (error)
    {
        console.log("error:"+error)
    }
    else
    {
        console.log(doc);
    }
})
//
// var mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/test1")
//
// mongoose.connection.on("error",function (error) {
//     console.log('数据库连接失败'+error)
// })
//
// mongoose.connection.on('open',function () {
//     console.log('数据库连接成功')
// })
