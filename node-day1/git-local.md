##git 本地操作
1、git冲突是在修改了同一文件同一行代码的时候会产生冲突
此时需要手动解决冲突

2、git有强大的分支管理功能

3、分布式
git和svn的区别
svn是集中式，需要有一台中央服务器
git是分布式

git的速度比svn快

svn每个文件夹都有一个文件.svn文件，git有一个单独的文件.git文件

4、git有三个区

工作区：写代码的地方
暂存区（过度区）
历史区（版本库）

5、git 安装
windows：http://git-scm.com
mac :   如果安装过xcode自带git，没有安装过xcode就不会自带
homebrew是mac的包管理器：https://brew.sh

6、mac的终端很丑 是白白的界面，也没有什么提示
下载两个插件：
有提示：oh-myzsh：http://ohmyz.sh
替换掉白板：http://www.iterm2.com

 要课件地址：
angular已经过时了




 7、git的使用
 配置用户（不配置用户不能提交代码）
git  config --list
git  config --global user.name "你的名字"
git  config --global user.email "你的名字"



8、Linux命令  这是第二个视频
 pwd 命令是打印当前工作目录

一个项目初始化一次  不能嵌套
 初始化git：git init  ：告诉git哪个文件夹被git所管理
 rm -rf  文件夹名
 rm  文件名

mkdir 文件夹名 创建目录
cd 改变路径

进入d盘的命令：cd d:

ls list show
ls -al 显示目录下所有的文件包括隐藏的文件
touch 文件名   创建文件
. 以点开头的文件为隐藏文件
cat  文件名：看文件里面的内容

第三个视频：提交到历史区

 git add . 或者-A把所有的文件 或者文件名  添加到暂存区
 git status 查看git的状态
 红色代表在工作区
 绿色是在暂存区
 git rm --cached . -r  取消暂存区
 或者 git rm --cached  文件名
 git commit -m "为什么提交"
 一个版本对应一个版本id号
 git log 提交的日志


 第四个视频 撤销文件

 git diff 默认工作区和暂存区的比较

git diff master(或者其他的分支) 工作区与历史区的比较

git diff --cached  暂存区和历史区的比较

撤销操作：
这个是只改变了工作区
git checkout .（或者文件名） 用暂存区的内容覆盖工作区的内容

提交到暂存区后的撤销操作：
git reset HEAD 文件名  这个是回滚到 暂存区的上一个版本
然后再覆盖工作区的代码  git checkout .(或者文件名)

history > 创建的文件名  可以把历史命令导入到所创建的文件里

第五、课件5  分支

 git commit -a -m"third"  直接提交到历史区，前提是这个文件提交过一次

如果发现历史区的当前版本有重大问题
解决办法是 回滚到上一个版本  包括暂存区和工作区
命令：git reset --hard 版本号
打印出所有的对版本进行的所有的操作:git reflog  可以看到所有的版本号
快速回滚到上一个版本：git reset --hard HEAD^

看分支：git branch
zichunlideMacBook-Pro:git-project zichunli$ git branch
* master
*代表 当前就在这个分支上

创建分支： git branch 名字
查看分支：git branch
切分支： checkout 分支名
删除分支：git branch -D 分支名
删除分支时当前用户不能在要删除的分支上
把创建分支和切换分支合并起来的命令：git checkout -b dev(分支名)
用webstorm打开的工程会产生.idea的文件
提交过不同的文件之后，两个分支才会彻底不同
更改工作区的分支的代码之后不能更改分支，用git stash  暂存之后就可以更改分支了

分支更改不能直接切换，可以提交更改或者暂存更改
暂存更改：git stash
暂存是用过渡区覆盖掉工作区，也就是之前更改的代码丢弃掉了
git stash  pop 把之前的代码 pop出来  还原暂存的内容
然后又不想要暂存内容了  git  checkout .

合并分支：
是把dev合并到master上
git merge 分支名

合并的过程
先创建主干，在主干的基础上添加一个分支，在分支上进行提交，切换到主干合并分支

第六个视频：合并分支
echo向文件中写东西，  输入文件内容
echo hello > 1.txt  向1.txt 中写入hello  也可以创建有内容的文件
echo hello >> 1.txt 追加
echo '内容' >> 1.txt
> 表示写入  >> 表示追加

一般不操作主干，不破坏主干来做


课件7  远程仓库
以上的git commit  并没有提交到网上，只是本地提交

merge的整体流程
mkdir git-pro2
cd git-pro2
touch index.css
git init 此时并没有master分支
git checkout -b dev
git checkout master      不能切换 error: pathspec 'master' did not match any file(s) known to git.
此时 git branch   为空  因为没有提交 并没有任何分支
所以要进行跟提交
git add .
git commit -m"添加到历史区"
此时 git branch  结果为：* dev
此时提交了 dev  按照  master  来一遍
有了根提交之后  就开创一个分支 dev  相当于把主干复制了一份
git checkout dev
然后修改文件
 vi index.css
 git add .
 修改master的分支
 git checkout master
 vi index.css
然后把dev合并到master上

 git merge dev 结果如下：
 Auto-merging index.css
 CONFLICT (content): Merge conflict in index.css
 Automatic merge failed; fix conflicts and then commit the result.

 cat index.css结果如下:

 <<<<<<< HEAD
 color:green
 =======
 color:re
 >>>>>>> dev

思路是 创建一个新的文件  把两个都放在这个文件中
vi index.css留下：
 color:green

 git add .
git commit -m"merge"
遇到冲突是只能手动解决冲突，留下想要的结果再次提交,此时dev还是它原先的

现在代码并没有在github上











































































测验
var start = Date.now()

setTimeOut(function(){

console.log(Date.now()-start);

for(var i=0;i<1000000000;i++)

},1000);

setTimeOut(function(){
  console.log(Date.now()-start);
},2000)

