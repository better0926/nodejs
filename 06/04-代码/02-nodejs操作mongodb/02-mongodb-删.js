//1. 导入
var MongoClient = require("mongodb").MongoClient;

//2. 连接服务器
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
  if(err) {
    return console.log("连接服务器失败",err);
  }
  //3. 使用乐淘数据库
  var db = client.db("letao");

  //.......一系列的增删改查操作即可
  //删除第一条name是老宫的数据
  db.collection("user").deleteMany({name:"老宫1"}, function(err, info){
    if(err) {
      return console.log("删除数据失败了", err);
    }
    if(info.result.ok === 1){
      console.log("删除数据成功，删除了"+info.result.n)
    }
  });


  //db.user.find()
  db.collection("user").find().toArray(function(err, data){
    if(err) {
      console.log("获取信息失败",err);
      return;
    }
    console.log(data);
  });

  //5. 关闭数据库
  client.close();

});