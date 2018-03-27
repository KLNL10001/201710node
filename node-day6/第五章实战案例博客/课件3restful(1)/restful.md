REST
Resources Representational State Transfer(资源表现层状态转化)
资源（Resources）网络上的一个实体，每个资源对应一个特定的URI  一个资源对应一个url
表现层(Representational)  资源呈现出来形式叫做表现层  如html  json等等
状态转化(State Transfer)HTTP协议里面，四个表示操作方式的动词 对应四种基本操作
某些动作是HTTP动词表示不了的，你就应该把动作做成一种资源


RESTful API设计

使用http协议
URL只有名词
HTTP动词：其实就是请求行里的method
 -GET 从服务器获取资源(一项或多项)
 -POST在服务器新建一个资源
 -PUT在服务器更新资源(客户端提供改变后的完整资源)
 -PATCH在服务器更新资源(客户端提供改变的属性)
 -DELETE从服务器删除资源

 查询字符串中指定过滤条件
  -当前页
  -每页数量
  -过滤关键字
  -排序字段
 GET/collection:返回资源对象的列表（数组）




