var express = require("express");

var app = express();



//req: path  /index
//     query: 直接能够获取参数
// app.get("/index", function(req, res){
//   //console.log(req.query.name);
//   //console.log(req.ip);
//   console.log(req.body)
//   //res.send("哈哈");

//   //res.send(['zs','ls','ww']);
//   //res.sendStatus(404);
//   //res.status(404);// res.statusCode = 404
//   //res.end("Not Found");
//   //res.set("content-type", "text/html;charset=utf-8");
//   //res.end("哈哈");

//   res.send("哈哈");
// });


app.get("/index", function(req, res){
  res.send("你正在访问首页");
});

app.get("/", function(req, res){
  res.redirect("/index");
});

app.listen(9999, function(){
  console.log("服务器启动成功了");
})




/* 

req:
  req.path
  req.query

res:
  send()
  status():设置状态码
  sendStatus():设置状态，返回一段内容
  sendFile():响应一个文件
  set(name, value)  set({})
  redirect(path)


*/