/* 
  nodejs操作mongodb依赖与一个模块： mongodb
*/
//1. 导入
//mongodb的客户端，可以连接到mongodb的服务器
var MongoClient = require("mongodb").MongoClient;
//2. 连接mongodb的服务器
//连接mongodb服务器的一个地址
var url = 'mongodb://localhost:27017';
//需要连接的mongodb的数据库
//var dbName = "letao";
//参数1： mongodb服务器的地址
//参数2：回调函数
  //err:表示连接失败的信息
  //client：连接成功的一个对象
MongoClient.connect(url, function(err, client){
  if(err) {
    return console.log("连接服务器失败");
  }
  
  //表示需要使用乐淘数据库  use letao
  var db = client.db("letao");

  //1. 查询数据
  //db.user.find();
  db
    .collection("user")
    .find()
    .toArray(function(err, data){
      if(err){
        return console.log("获取数据失败");
      }
      console.log(data);
  });

  //关闭数据库
  client.close();

});

