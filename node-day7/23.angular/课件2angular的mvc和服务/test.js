/**
 * Created by zichunli on 18/4/12.
 */
var arr =[1,4,3]

//从左向右加
var  result =arr.reduce(function (current, next) {
    console.log(current,next)
    return current + next;
}, 0)
console.log(result);

//从右向左加
var  result =arr.reduceRight(function (current, next) {
    console.log(current,next)
    return current + next;
}, 0)



