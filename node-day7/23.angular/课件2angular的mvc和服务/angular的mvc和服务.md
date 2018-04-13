双向数据绑定  这是angularjs特有的
1、数据变化影响界面显示
2、UI变化影响数据
3、ng-model将$scope变量与输入框绑定 ng开头的是angular自带的属性

JQuery以DOM为中心，之前是想得到DOM元素，然后操作DOM元素
angularJS是以数据为中心的，是通过数据自动维护这个关系



   angular常用的指令
ng-bind 绑定html元素 <span ng-bind="say"></span> ,解决闪烁的问题
凡是ng开头的 绑定的都是它的angular的属性

ng-click 为当前元素click事件绑定$scope上的对应方法
 <span ng-bind="say"></span>
 <span ng-click="show(say)">show</span>

ng-if 布尔类型 为true执行内部指令，为false时不执行内部指令,也就是判断是否存在这个属性
<div ng-if="true">
    <span>show</span>
</div>

scope是一个作用域 是一个对象。

ng-inspector ng监控器 这是一个插件  使用ng-inspector调试Angular页面

ng-show和ng-if 不一样 ng-show是隐藏 ng-if是销毁了


ng-class 定义元素的class样式，属性值如下：{'class1':expression1,'class2':expression2}
         ng-class="{'has-error':username.length>6}"

ng-show  布尔类型为true时显示  false时隐藏
ng-hide  布尔类型为false时显示 true时隐藏

提示都没有实现 红框和绿框   以及文字提示都没有出现  这个bug需要调  没有达到表单验证的目的

ng-repeat 遍历数组


            服务
服务是能提供特定功能的一个对象，有以下特点：
1、service都是单例的
2、angular会自动创建实例并注入，不需要手工创建
3、service在整个应用的生命周期存在，可以共享数据
4、$http服务
$http是对jquery  ajax的封装

自定义服务：
可以用模块的factory方法定义自己的服务  可以从网上搜例子  是个工厂函数

                        过滤器
filter是用来数据格式化的服务
filter可以级联使用(用|分隔)
filter可以传递参数的
currency 货币过滤器

date 日期过滤器

json对象过滤器





















