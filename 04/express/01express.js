var express = require("express");
var app = express();

//get(参数一，参数二)  参数一： 路径, 参数二： 函数
app.get("/index", function (req, res) {
  res.send("heheda");
});

app.post("/a",function(req,res){
  res.send("这是详情页");
});

app.listen(9999,function(){
  console.log("服务器启动了");
  
});