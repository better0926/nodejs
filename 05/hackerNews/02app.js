
var router = require("./router");
var express = require("express");
var app = express();


var userRouter = require("./userRouter");

var bodyParser = require("body-parser");

//处理静态资源
app.use("/assets", express.static("assets"));

//设置模板引擎
app.engine("html", require("express-art-template"));

//使用中间件
app.use(bodyParser.urlencoded({ extended: true }));
//使用路由
app.use(router);
app.use(userRouter);


app.listen(9999, function () {
  console.log("服务器启动了");
});

