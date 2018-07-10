var handler = require("./handler");
var express = require("express");

//1. 创建一个路由对象
var router = express.Router();

//注册路由
router.get("/index", function (req, res) {
  handler.showIndex(req, res);
});
router.get("/", function (req, res) {
  //如果访问了/ 重定向到 /index
  res.redirect("/index");
});
router.get("/submit", function (req, res) {
  handler.showSubmit(req, res);
});
router.get("/details", function (req, res) {
  
  handler.showDetails(req, res);
})
router.get("/add", function (req, res) {
  
  handler.addGet(req, res);

});
router.post("/add", function (req, res) {
  handler.addPost(req, res);
});

module.exports = router;