/* 
  db.js只和数据库有关
  专门用于获取数据
*/
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var url = "mongodb://localhost:27017";//数据库服务器的地址
var dbName = "hackernews";//数据库的名字

module.exports = {
  //获取所有新闻
  findAllNews: function(callback){
    //1. 读取数据库中的数据
    //2. 渲染首页
    MongoClient.connect(url, function(err, client){
      if(err) {
        return console.log("连接服务器失败了",err);
      }
      var db = client.db(dbName);

      //查询所有的新闻的数据
      db.collection("news").find().toArray(function(err, result){
        if(err) {
          return console.log("读取数据失败了", err);
        }
        //获取到所有的数据之后，调用callback
        callback(result);
      })
      //关闭服务器
      client.close();
    });
  },

  //增加一条新闻
  addOneNews: function(news, callback){
    MongoClient.connect(url, function(err, client){
      if(err){
        return console.log("连接数据失败",err);
      }
      var db = client.db(dbName);

      db.collection("news").insertOne({
        title: news.title,
        url: news.url,
        text: news.text
      }, function(err, result){
        if(err) {
          return console.log("添加数据失败了");
        }
        if(result.result.ok === 1){
          callback();
        }
      });

      client.close();
    });
  },

  //根据id查询一条新闻
  findNewsById: function(id, callback){
    MongoClient.connect(url, function(err, client){
      if(err){
        return console.log("连接数据失败",err);
      }
      var db = client.db(dbName);

      //查询 
      //在mongodb中，id并不是所有的字符串
      //可以把一个字符串转换成id new ObjectId(id)
      db.collection("news").findOne({_id: new ObjectID(id) }, function(err, result){
        if(err) {
          console.log("查询数据库库失败",err);
        }
        callback(result);
      });

      client.close();
    });
  },

  deleteNewsById: function(id, callback){

    MongoClient.connect(url , function(err, client){
      if(err) {
        return console.log("服务器连接失败了",err);
      }
      var db = client.db(dbName);

      db.collection("news").deleteOne({_id: new ObjectID(id)}, function(err, result){
        if(err){
          return console.log("删除数据失败了", err);
        }
        if(result.result.ok === 1){
          callback();
        }
      });

      client.close();
    });

  }

};