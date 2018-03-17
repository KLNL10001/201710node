/**
 * Created by zichunli on 18/2/9.
 */

var start = Date.now()

setTimeout(function(){

    console.log(Date.now()-start);

    for(var i=0;i<10000000000;i++){}

        },1000);

setTimeout(function(){
    console.log(Date.now()-start);
},2000);

console.log(0b11);//3