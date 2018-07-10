//负责处理事件,处理渲染逻辑

var fs = require("fs");
var path = require("path");

module.exports = {
  showIndex: function (req, res) {
    //读取文件
    readDate(function (data) {
      res.render("index.html", data);
    });
  },
  showSubmit: function(req,res){
    //读取文件
    readDate(function (data) {
      res.render("submit.html", data);
    });
  },
  showDetails: function(req,res){

    // 1，获取查询字符串中的id
    var id = req.query.id;

    //根据id查询数据
    readDate(function (data) {
      var obj = data.list.find(function (e) {
        return e.id == id;
      });
      console.log(obj);
      //渲染页面
      res.render("details.html", obj);
    })

  },
  addGet: function(req,res){
    //2、读取data数据
    readDate(function (data) {
      //3,把获取到的请求参数加入到data中。把参数重新写入data中
      data.list.push({
        id: ++data.index,
        title: newData.title,
        url: newData.url,
        text: newData.text
      });
      //写数据
      writeData(data, function () {
        //4，重定向 
        res.redirect("/index");
      });
    })

  },
  addPost: function(req,res){

    //post请求 用req.body获取请求参数
    //1,获取请求参数
    var newData = req.body;
    //console.log(newData);

    //读取文件
    readDate(function (data) {
      //2，给data中新增一条数据
      data.list.push({
        id: ++data.index,
        title: newData.title,
        url: newData.url,
        text: newData.text
      });

      //3，写入数据
      writeData(data, function () {
        //重定向
        res.redirect("/index");
      });
    });

  },
  showStatic: function(req,res){

  }
};


//读文件
function readDate(callback) {
  fs.readFile(path.join(__dirname, "data", "data.json"), "utf-8", function (err, data) {
    if (err) {
      return res.send("读取文件失败", err);
    }
    data = JSON.parse(data);
    callback(data);
  });
};

//写文件
function writeData(data, callback) {
  fs.writeFile(path.join(__dirname, "data", "data.json"), JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("写文件失败", err);
    }
    callback();
  });
}