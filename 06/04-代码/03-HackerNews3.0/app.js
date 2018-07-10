var express = require("express");
var bodyParser = require("body-parser");
var router = require("./router");

var app = express();

 
   
//处理静态资源
app.use("/assets",express.static("assets"));
//设置模版引擎
app.engine("html", require("express-art-template"));
//设置body-parser中间件
app.use(bodyParser.urlencoded({extended:true}));


//注册路由
app.use(router);



app.listen(9999, function(){
  console.log("你的HackerNews3.0已经上线，访问地址：http://localhost:9999");
});