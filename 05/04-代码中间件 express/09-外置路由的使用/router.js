var express = require("express");
//1. express.Router()方法会生成一个路由对象
//我们可以给路由对象注册路由
var router = express.Router();

//2. 给路由对象注册路由
router.get("/", function(req, res){
  res.send("首页");
});

router.get("/add", function(req, res){
  res.send("添加页");
})

router.get("/details", function(req, res){
  res.send("详情页");
});

//3. 把路由对象暴漏出去
module.exports = router;