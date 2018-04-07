
Mongo:database->collection->document->field

关系型数据库:database->table->row->column

admin:从权限的角度来看，这个'root'数据库。要是将一个用户添加到账合格数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端
命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器

local:这个数据库永远不会被复制，可以用来存储限于本地单台服务器的任意集合
config:当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息


二、文档
MongoDB使用了BSON这种结构来存储数据和网络数据交换
BSON数据可以理解为在JSON的基础上添加了一些json中没有的数据类型
查看当前数据库：db或者db.getName()
db.dropDatabase()删除当前数据库

退出与服务器的命令 exit



