var express = require("express");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();

//处理静态资源
app.use("/assets", express.static("assets") );

//设置模版引擎
app.engine("html", require("express-art-template"));

//使用中间件 body-parser
app.use( bodyParser.urlencoded({extended:true}) );

//注册路由
app.get("/index", function(req, res){
  //先把首页给显示出来
  //1. 先读取data.json文件，获取到所有的新闻数据
  //2. res.render("index.html", 数据)
  readNewsData(function(data){
    res.render("index.html", data);
  });

});

app.get("/", function(req, res){
  //如果访问了/ 重定向到 /index
  res.redirect("/index");
});

app.get("/submit", function(req, res){
  //先把首页给显示出来
  res.sendFile(path.join(__dirname, "views", "submit.html"));
});

app.get("/details", function(req, res){
  //先把首页给显示出来
  //1. 获取id
  var id = req.query.id;
   //2. 获取数据
  readNewsData(function(data){
    //3. 根据id获取详情的数据
    var obj = data.list.find(function(e){
      return e.id == id;
    })
    //4. 渲染页面
    res.render("details.html", obj);
  });

});

app.get("/add", function(req, res){
  //1. 获取到get请求的参数
  var newsData = req.query;
  //2. 读取json的数据
  readNewsData(function(data){
    //3. 给data.list增加一条数据
    data.list.push({
      id: ++data.index,
      title: newsData.title,
      url: newsData.url,
      text: newsData.text
    });
    //4. 写回data.json
    writeNewsData(data, function(){
      //5. 重定向到 /index
      res.redirect("/index");
    });
    
  });
  
});

app.post("/add", function(req, res){
  //1. 获取到get请求的参数
  var newsData = req.body;
  //2. 读取json的数据
  readNewsData(function(data){
    //3. 给data.list增加一条数据
    data.list.push({
      id: ++data.index,
      title: newsData.title,
      url: newsData.url,
      text: newsData.text
    });
    //4. 写回data.json
    writeNewsData(data, function(){
      //5. 重定向到 /index
      res.redirect("/index");
    });
    
  });
});


app.listen(9999, function(){
  console.log("你的HackerNews2.0已经上线，请访问：http://localhost:9999");
});



function readNewsData(callback) {
  fs.readFile(path.join(__dirname, "data", "data.json"), "utf8", function(err, data){
    if(err) {
      return console.log("读取文件失败了", err);
    }
    data = JSON.parse(data);
    callback(data);
  });
}

function writeNewsData(data, callback) {
  fs.writeFile(path.join(__dirname, "data", "data.json"), JSON.stringify(data, null, 2), function(err){
    if(err) {
      return console.log("写入文件失败", err);
    }
    callback();
  })
}