var express = require("express");
var router = require("./router");

var app = express();



//3.把路由对象交给app使用，相当于刚刚的所有的路由注册给app
app.use(router);

app.listen(9999, function(){
  console.log("ok");
})



/* 
  注册路由可以不直接给app注册路由

    1. express.Router()生成一个路由对象
    2. 给路由对象注册路由
    3. 把整个路由对象交给app


*/