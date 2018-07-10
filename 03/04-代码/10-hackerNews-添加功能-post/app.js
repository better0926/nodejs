var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var template = require("art-template");
var urlModule = require("url");
var querystring = require("querystring");


var server = http.createServer();

server.on("request", function(req, res){
  //表示读取文件的内容，并且渲染数据，最终响应给浏览器
  function render(page, data) {
    data = data || {};
    //结合模版引擎进行渲染
    var html = template(path.join(__dirname, "views", page), data);
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end(html);
  }

  //路由处理
  var url = req.url;
  var method = req.method.toLowerCase();

  if(url === "/" || url === "/index") {
    //1. 读取data.json文件中的数据
    //2. 结合模版引擎，能够得到渲染完的结构
    //3. 渲染完成后的结构返回给浏览器
    fs.readFile(path.join(__dirname, "data", "data.json"), "utf-8",function(err, data){
      if(err) {
        return console.log("读取文件失败", err);
      }
      //把读取到的数据，转换成对象格式
      data = JSON.parse(data);
      
      render("index.html", data);
      
    });
    
  }else if(url.startsWith("/details")) {
    //1. 获取到id值
    var id = urlModule.parse(url, true).query.id;
    console.log(id);
    //2. 读取data.json的数据（数组）
    fs.readFile(path.join(__dirname, "data", "data.json"), "utf-8", function(err, data){
      if(err) {
        return console.log("读取文件失败", err);
      }
      //一定要把data转成一个对象
      data = JSON.parse(data);

      //根据id找到对应的数据
      //find方法  findIndex方法   es6
      var obj = data.list.find(function(e) {
        return e.id == id;
      });
      //console.log(obj);
      //for forEach filter  map some every  find findIndex
      console.log(obj);
      render("details.html", obj);
 
    })
    //3. 根据id值找到具体一个详细的数据
    //4. render("details.html", obj);
    //render("details.html");
    //res.end("ok");
  }else if(url.startsWith("/submit")) {
    //渲染submit.html
    render("submit.html");
  }else if(url.startsWith("/assets")) {
    //渲染静态资源
    fs.readFile(path.join(__dirname, url), function(err, data){
      if(err) {
        res.statusCode = 404;
        res.setHeader("content-type", "text/html;charset=utf-8");
        res.end("404,你访问的资源不存在");
        return;
      }
      res.setHeader("content-type", mime.getType(url));
      res.end(data);
    });
  }else if(url.startsWith("/add") && method === "get") {
    //处理添加一条新闻的请求(get方法)
    //1. 获取到浏览器传递过来所有的参数（参数拼接到url中）
    var newsData = urlModule.parse(url, true).query;
    //console.log(newsData);
    //2. 获取到data.json中存储的数据
    fs.readFile(path.join(__dirname, "data", "data.json"), "utf8", function(err, data){
      if(err) {
        return console.log("读取文件内容失败", err);
      }
      data = JSON.parse(data);

      //新对象的id：index属性+1
      newsData.id = ++data.index;

      data.list.push({
        id: newsData.id,
        title: newsData.title,
        url: newsData.url,
        text:newsData.text
      });
      
      //需要把data重新写入data.json文件中
      fs.writeFile(path.join(__dirname, "data", "data.json"), JSON.stringify(data,null,2), function(err){
        if(err) {
          return console.log("写入文件失败了", err);
        }
        //成功了,跳转到首页, 浏览器，你去跳到首页去
        res.statusCode = 302;
        res.setHeader("Location", "/index");
        res.end();
        
      });

    });
    //3. 把浏览器传递数据添加到数组中
    //4. 把修改后的数据重新的写入到data.json
    //5. 重定向到 /index

    //res.end(req.method);

  }else if(url.startsWith("/add") && method === "post") {
    
    //1. 获取到post请求的参数（对象）
    //2. 读取data.json文件，得到数组
    //3. 把对象存在数组中data.list
    //4. 重新写入data.json文件中
    //5. 重定向到 /index

    var query = "";
    req.on("data", function(chunk) {
      query += chunk;
    });
    req.on("end", function(){
      //需要把query转换成对象
      var newsData = querystring.parse(query);
      
      fs.readFile(path.join(__dirname, "data","data.json"), "utf8", function(err,data){
        if(err) {
          return console.log("读取文件失败了", err);
        }

        data = JSON.parse(data);

        //存储
        data.list.push({
          id: ++data.index,
          title: newsData.title,
          url: newsData.url,
          text: newsData.text
        });

        //重新写入data.json
        fs.writeFile(path.join(__dirname, "data", "data.json"), JSON.stringify(data, null, 2), function(err){
          if(err) {
            return console.log("写入文件失败");
          }
          //重定向
          res.writeHead(302, {
            "Location": "/"
          });
          res.end();
        });
      })

    });

    
    
    //res.end(req.method);
  }else {
    //渲染404
    res.statusCode = 404;
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("404,你访问的资源不存在");
  }

});

server.listen(9999, function(){
  console.log("服务器启动成功了");
});