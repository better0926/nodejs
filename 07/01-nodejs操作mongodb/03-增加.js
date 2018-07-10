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
  db.collection("news").insertMany([{
    "title":"说散就散", 
    "url":"袁娅维", 
    "text":"抱一抱，就当做从没有在一起"
  },{
    "title":"你再也不会遇上第二个她", 
    "url":"李哈哈", 
    "text":"学不会也做不到，做不到也忘不掉"
  }], function(err, result){
    if(result.result.ok === 1){
      console.log("添加数据成功");
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