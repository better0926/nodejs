# 数据库相关的命令
show dbs:  显示所有的数据库
db: 查看当前的数据库  db(代表当前正在使用的那个数据)
use 数据库名 ： 切换数据库，如果没有就会创建
db.dropDatabase();  删除当前正在使用的数据库（知道就行，别删了）


# 增删改查的操作

数据库： 一个项目会对应一个数据， 一个数据库可以有很多表  hackernews   letao
集合：user用户信息， 品牌信息：brand
文档：一个集合可以有很多条数据  {name:"zs", age:19}
字段: name:  age

## 增
db.集合名.insert({});插入一条数据
db.user.insertMany([{}, {}]);插入多条数据

## 查
db.user.findOne({条件}):查询一条数据
db.user.find(); 查询多条数据

## 删除
db.user.deleteOne(条件);删除一条
db.user.deleteMany(条件);删除多条

## 修改
db.user.updateOne(条件, {$set: {修改的内容}});
db.user.updateMany(条件, {})