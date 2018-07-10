var fs = require("fs");
var path = require("path");
var mime = require("mime");
var URL = require("url");
var querystring = require("querystring");



//负责读取文件
function readNewsData(callback) {
  //读取data数据
  fs.readFile(path.join(__dirname, "data", "data.json"), "utf-8", function (err, data) {
    if (err) {
      return res.end("读取文件失败", err);
    }

    //data转成对象格式。
    data = JSON.parse(data);
    callback(data);

  });
}
//写文件函数
function writeNewsData(data, callback) {
  fs.writeFile(path.join(__dirname, "data", "data.json"), JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return end("写入数据失败", err);
    }
    //写入成功。执行 重定向到首页
    //状态码为302则为重定向
    callback();
  });
}

module.exports = {
  //渲染首页
  showIndex: function (Req, res) {
    //根据url读取相应的页面
    //renderHtml("index.html");

    //template模板渲染 
    //template(参数一文件路径，参数2响应需要渲染的数据)

    readNewsData(function (data) {
      res.render("index.html", data);
    });
  },
  showDetails: function (req, res) { //渲染详情页
    //通过parse的方法可以得到一个字符串，然后传一个true将其解析成一个对象，再通过query.id拿到对象中的id
    //第一 ： 获取到id
    var id = URL.parse(req.url, true).query.id;
    //console.log(id);
    //第二： 读取json文件
    readNewsData(function (data) {
      var obj = data.list.find(function (e) {
        return e.id == id;
        //console.log(obj);
      });
      res.render("details.html", obj);
    });
  },
  showSubmit: function (req, res) {
    res.render("submit.html");
  },
  showStatic: function (req, res) {
    fs.readFile(path.join(__dirname, req.url), function (err, data) {
      res.setHeader("content-type", mime.getType(req.url));
      if (err) {
        res.writeHead(404, {
          "content-type": "text/html;charset=utf-8"
        });
      };
      res.end(data);
    });
  },
  addGet: function (req, res) {
    var newsData = URL.parse(url, true).query;
    //console.log(newsData);
    //读取data数据

    //调用读取文件函数
    readNewsData(function (data) {
      //把获取到newsData push到data中 
      data.list.push({
        id: ++data.index, //给新newsData增加id属性
        title: newsData.title,
        url: newsData.url,
        text: newsData.text
      });

      readNewsData(data, function () {
        //写入成功。执行 重定向到首页
        //状态码为302则为重定向
        res.redirect("/index");
      });
      //调用写文件函数

    });
  },
  addPost: function (req, res) {
    var query = "";
    //post请求对每次请求的参数大小没有限制
    //所以需要把每一次请求的参数拼接起来
    //chunk每次只能获取到一部分请求的参数
    req.on("data", function (chunk) {
      query += chunk;
      //console.log(query);
    });
    //post请求完成，触发end事件
    req.on("end", function () {
      //拿到query是一个拼串，使用querystring方法进行处理

      //把query转成对象
      var newsData = querystring.parse(query);
      console.log(query);
      //读取文件
      fs.readFile(path.join(__dirname, "data", "data.json"), "utf-8", function (err, data) {
        if (err) {
          return res.end("读取文件失败", err);
        }
        //读取成功
        data = JSON.parse(data);
        console.log(data);

        //给result添加一个index属性
        //newsData.id = ++data.index;
        data.list.push({
          id: ++data.index,
          title: newsData.title,
          url: newsData.url,
          text: newsData.text
        });

        //把获取到的数据写到data中  stringify(data,null,2)  写入的参数1，参数3是缩进2个字符
        fs.writeFile(path.join(__dirname, "data", "data.json"), JSON.stringify(data, null, 2), function (err) {
          if (err) {
            return res.end("写入失败", err);
          }

          //写入成功 重定向到首页 
          res.redirect("/index");

        });

      });

    });
  },
  showErr: function(req,res){
    res.statusCode = 404;
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("你访问的文件不存在");
  }
}