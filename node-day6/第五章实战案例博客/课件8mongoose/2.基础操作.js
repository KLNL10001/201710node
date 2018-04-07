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

//find查询
// PersonModel.find({age:6},function (err,docs) {//docs是数组
//
//     if (err)
//     {
//         console.error(err);
//     }
//     else
//     {
//         console.log(docs);
//     }
//
//
// })
//Model保存方法
PersonModel.create({name:"lili2",age:7},function (err,doc) {
    if (err)
    {
        console.error(err);
    }
    else
    {
        console.log(doc);
    }
})
//创建多条数据
PersonModel.create([
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
//更新操作
var conditions = {age:6}
var update = {$set:{age:88}}
//multi:true} 说明更新多条数据 全部更新  否则 更新一条  默认更新一条数据
PersonModel.update(conditions,update,{multi:true},function (err) {
    if (err)
    {
        console.error(err)
    }
    else
    {
        console.log('更新成功')
    }

})

PersonModel.update({name:'lili'},{$inc:{age:2}},function (err,result) {
    if (err)
    {
        console.error(err)
    }
    else
    {
        console.log(result)//{ n: 1, nModified: 1, ok: 1 }  更新了一条
    }

})

PersonModel.update({name:'lili'},{$inc:{age:2}},{multi:true},function (err,result) {
    if (err)
    {
        console.error(err)
    }
    else
    {
        console.log(result)//{ n: 3, nModified: 3, ok: 1 } 更新三条
    }

})

//四、删除数据

PersonModel.remove({age:90},function (err,result) {
    if (err)
    {
        console.error(err)
    }
    else
    {
        console.log(result)//{ n: 2, ok: 1 }
    }

})

//update create remove 因为是异步的 所以  不一定哪个先执行完
