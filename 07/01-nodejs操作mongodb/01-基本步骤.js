//1. 引入mongodb
var MongoClient = require("mongodb").MongoClient;

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

  //5. 关闭连接
  client.close();
});