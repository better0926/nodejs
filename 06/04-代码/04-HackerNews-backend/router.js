var router = require("express").Router();
var db = require("./db");

//获取所有的新闻接口：
//localhost:9999/getNewsList : 可以获取到所有的新闻
router.get("/getNewsList", function(req, res){
  db.findAllNews(function(result){
    //获取到所有的新闻的数据，把数据响应给浏览器
    res.send({
      code: 200,
      msg: '获取新闻列表数据成功',
      list: result
    });
  });
});

//增加新闻
router.post("/addNews", function(req, res){
  var newsData = req.body;
  db.addOneNews(newsData, function(){
    res.send({
      code: 200,
      msg:"添加新闻成功"
    });
  });
});

//获取新闻详情的接口
router.get("/getNewsInfo", function(req, res){
  var id = req.query.id;
  db.findNewsById(id, function(result){
    res.send({
      code:200,
      msg:"获取详情成功",
      info: result
    });
  });
})

//获取新闻详情的接口
router.get("/deleteNews", function(req, res){
  var id = req.query.id;
  db.deleteNewsById(id, function(){
    res.send({
      code:200,
      msg:"删除数据成功"
    });
  });
})

module.exports = router;