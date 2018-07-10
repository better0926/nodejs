//1. 导入
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

//2. 连接服务器
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
  if(err) {
    return console.log("连接服务器失败",err);
  }
  //3. 使用乐淘数据库
  var db = client.db("letao");




  //db.user.find()
  // db.collection("user").find().toArray(function(err, data){
  //   if(err) {
  //     console.log("获取信息失败",err);
  //     return;
  //   }
  //   console.log(data);
  // });
  
  //5b42c83a797f6e3464a2c648
  //id: ObjectID
  db.collection("user").findOne({_id:new ObjectID('5b42c83a797f6e3464a2c648')}, function(err, result){
    if(err) {
      console.log("查询单个数据失败了");
      return;
    }
    console.log(result);
  })


  //5. 关闭数据库
  client.close();

});