var router = require("express").Router();
var handler = require("./handler");

//给router注册路由
router.get("/index", function(req, res){
  handler.showIndex(req, res);
});

router.get("/", function(req, res){
  res.redirect("/index");
});

router.get("/submit", function(req, res){
  handler.showSubmit(req,res);
});

router.get("/details", function(req,res){
  handler.showDetails(req, res);
});

router.get("/add", function(req, res){
  handler.addGet(req, res);
});

router.post("/add", function(req, res){
  handler.addPost(req, res);
});

router.get("/delete", function(req, res){
  handler.deleteNews(req, res);
});

module.exports = router; 