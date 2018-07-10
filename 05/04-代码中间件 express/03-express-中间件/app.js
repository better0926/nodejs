var express = require("express");

var app = express();

//添加一个中间件
//参数1：请求对象
//参数2：响应对象
//参数3：函数next，调用next，中间件会继续往后传递
app.use( function(req, res, next){
  //req:请求对象
  //res响应对象
  req.aa = "胡聪聪";
  res.bb = "很帅";

  //可以调用next传递给一下一个中间件   或者你可以res.send()结束请求
  next();
});

//其他语言里面的过滤器,,,,,,,
//  需求, 我需要记录所有用户访问的ip地址，访问的时候
app.use(function(req, res, next){
  console.log("你访问的ip地址是："+req.ip, "你访问的时间是："+new Date());
  res.send("哈哈哈");
});

app.get("/", function(req, res){
  //console.log(req.aa);
  //console.log(res.bb);
  res.send("你访问了首页");
});

app.listen(9999, function(){
  console.log("ok");
});
