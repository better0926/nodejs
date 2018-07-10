var path = require("path");
var fs = require("fs");
//处理具体的渲染的逻辑
module.exports = {
  showIndex: function(req, res){
    //先把首页给显示出来
    //1. 先读取data.json文件，获取到所有的新闻数据
    //2. res.render("index.html", 数据)
    readNewsData(function (data) {
      res.render("index.html", data);
    });
  },
  showSubmit: function(req, res){
    //先把首页给显示出来
    res.sendFile(path.join(__dirname, "views", "submit.html"));
  },
  showDetails: function(req, res){
    //先把首页给显示出来
    //1. 获取id
    var id = req.query.id;
    //2. 获取数据
    readNewsData(function (data) {
      //3. 根据id获取详情的数据
      var obj = data.list.find(function (e) {
        return e.id == id;
      })
      //4. 渲染页面
      res.render("details.html", obj);
    });
  },
  addGet: function(req, res) {
     //1. 获取到get请求的参数
     var newsData = req.query;
     //2. 读取json的数据
     readNewsData(function (data) {
       //3. 给data.list增加一条数据
       data.list.push({
         id: ++data.index,
         title: newsData.title,
         url: newsData.url,
         text: newsData.text
       });
       //4. 写回data.json
       writeNewsData(data, function () {
         //5. 重定向到 /index
         res.redirect("/index");
       });
 
     });
  },
  addPost: function(req, res){
     //1. 获取到get请求的参数
     var newsData = req.body;
     //2. 读取json的数据
     readNewsData(function (data) {
       //3. 给data.list增加一条数据
       data.list.push({
         id: ++data.index,
         title: newsData.title,
         url: newsData.url,
         text: newsData.text
       });
       //4. 写回data.json
       writeNewsData(data, function () {
         //5. 重定向到 /index
         res.redirect("/index");
       });
 
     });
  }
};



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