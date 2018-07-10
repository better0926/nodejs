var path = require("path");
var db = require("./db");
 
module.exports = {
  showIndex:function(req, res){
    db.findAllNews(function(result){
      res.render("index.html", {list:result});
    }); 
  },
  showDetails: function(req,res){
    //1. 获取id值
    //2. 数据中根据id来查找对应的数据  findOne
    var id = req.query.id; 

    db.findNewsById(id, function(result){
      res.render("details.html", result);
    });
  
  },
  showSubmit: function(req, res){
    res.sendFile(path.join(__dirname, "views", "submit.html"));
  },
  addGet: function(req, res){
    //1. 获取到请求的参数
    //2. 添加到数据库
    var newsData = req.query;
    db.addOneNews(newsData, function(){
      res.redirect("/");
    });
   
  },
  addPost: function(req, res){
    var newsData = req.body;
    db.addOneNews(newsData, function(){
      res.redirect("/");
    })
  },
  deleteNews: function(req, res){
    var id = req.query.id;
    db.deleteNewsById(id, function(){
      res.redirect("/");
    });
  }
};