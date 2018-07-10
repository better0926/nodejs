var express = require("express");

var bodyParser = require("body-parser");
var router = require("./router");
var userRouter = require("./userRouter");

var app = express();
//处理静态资源
app.use("/assets", express.static("assets") );

//设置模版引擎
app.engine("html", require("express-art-template"));

//使用中间件 body-parser
app.use( bodyParser.urlencoded({extended:true}) );

//使用路由
app.use(router);
app.use(userRouter);

app.listen(9999, function(){
  console.log("你的HackerNews2.0已经上线，请访问：http://localhost:9999");
});



