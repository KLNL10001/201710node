/**
 * Created by zichunli on 18/3/5.
 */
//课件四  模块的使用

class Dialog{

constructor()
{
    this.time=3000;
}
//static title ='弹框' 这个es6 不认 es7 是可以的
    static  title()
    {
        return '标题'
    }
    $show ()
    {
        console.log('show')

    }
    $hide()
    {
        console.log('hide')

    }
}
module.exports=Dialog;