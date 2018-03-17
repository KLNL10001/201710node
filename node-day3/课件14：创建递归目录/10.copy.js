let fs = require('fs' )
//readFileSync 和writeFileSync
/*function copySync(source,target) {
    console.log(source);
    let result = fs.readFileSync(source)
    console.log(result);
    console.log(target);
    fs.writeFileSync(target,result)
}
copySync('1.txt','2.txt')*/


//readFile 和writeFile
function copy(source,target,callback) {
fs.readFile(source,function (err,data) {
    if(err) {
        console.log('err'+err);
        return callback(err)
    }
    fs.writeFile(target,data,callback)
})
}
copy('1.txt','2.txt',function (err) {
    console.log('你说'+err);
    console.log('拷贝成功');
})
