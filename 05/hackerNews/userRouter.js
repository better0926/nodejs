//负责出用户相关的路由
var express = require("express");
var router = express.Router();

router.get("/user", function(req, res){
  res.send("这是用户管理的首页");
});

module.exports = router;