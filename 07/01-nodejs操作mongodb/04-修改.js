//1. 引入mongodb
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;

var url = "mongodb://localhost:27017";

//2. 连接mongodb服务器
//err:连接失败的失败信息
//client: 连接成功后的一个连接对象  通过cilent对象就可以操作我们的数据亏
MongoClient.connect(url, function(err, client){
  if(err){
    return console.log("连接数据库失败了");
  }

  //3. db表示当前正在操作的数据库
  var db = client.db("hackernews");

  //4. 增删改查
  db.collection("news").updateMany({"url":"袁娅维"}, {$set:{"url":"于文文"}}, function(err, result){
    if(result.result.ok === 1){
      console.log("修改成功了");
    }
  })







  //查询所有
  db.collection("news").find().toArray(function(err, result){
    if(err){
      console.log("读取数据库失败了");
      return;
    }
    console.log(result);
  });

  //5. 关闭连接
  client.close();
});