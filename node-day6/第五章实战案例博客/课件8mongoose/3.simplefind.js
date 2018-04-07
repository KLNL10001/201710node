/**
 * Created by zichunli on 18/4/7.
 */
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

/*PersonModel.create([
    {name:"lili1",age:7},
    {name:"lili2",age:7},
    {name:"lili3",age:7},
    {name:"lili4",age:7},
    {name:"lili5",age:7},

],function (err,doc) {
    if (err)
    {
        console.error(err);
    }
    else
    {
        console.log(doc);
    }
})
*/
PersonModel.findById('5ac8c2472b317f146b052108',function (err,doc) {

    console.log(doc);//{ _id: 5ac8c2472b317f146b052108, name: 'lili1', age: 7, __v: 0 }

})