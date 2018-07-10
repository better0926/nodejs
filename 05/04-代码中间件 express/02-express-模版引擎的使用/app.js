var express = require("express");
var path = require("path");

var app = express();

//给express设置模版引擎
//参数1： 模版引擎的后缀名，  以后的模版文件都应该是 html结尾
//参数2： 使用什么模版引擎
app.engine("html", require('express-art-template'));

//模版文件默认去aa目录下查找  默认值：  views
app.set("views", "aa");

//设置模板引擎的默认后缀
app.set("view engine", "html");

app.get("/", function(req, res){
  //res.sendFile(path.join(__dirname, "index.html"));
  //参数1； 模版文件的路径,相对路径，回去views目录下查找
  //参数2： 数据


  //注意：如果是相对路径，模版引擎默认会去views目录下查找我们的模版文件
  res.render("index", {name:"zs"});
});


app.listen(9999, function(){
  console.log("ok");
});
