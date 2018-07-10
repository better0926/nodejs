//只负责注册路由


var express = require("express");

//1. 创建一个路由对象
var router = express.Router();

var handler = require("./handler");

//注册路由;
router.get("/", function (req, res) {

  //重定向到首页
  res.redirect("/index");
});

router.get("/index", function (req, res) {

  handler.showIndex(req,res);
  
});

router.get("/submit", function (req, res) {
  handler.showSubmit(req,res);
  
});

router.get("/details", function (req, res) {
  handler.showDetails(req,res);

});

//get请求
router.get("/add", function (req, res) {

  handler.addGet(req,res);
  //1,获取请求的参数
  var newData = req.query;

});

//post请求
router.post("/add", function (req, res) {

  handler.addPost(req,res);

});

//对外暴露router
module.exports = router;
