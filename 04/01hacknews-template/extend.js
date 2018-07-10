var path = require("path");
var template = require("art-template");
module.exports = function (req,res) { 
  
  // 页面渲染
  res.render = function render(html, data) {
    data = data || {};
    res.setHeader("content-type", "text/html;charset=utf-8");
    var html = template(path.join(__dirname, "views", html), data);
    res.end(html);
  };

  //重定向
  res.redirect = function(page){
    res.statusCode = 302;
    res.setHeader("Location", page); //第二个参数为重定向地址
    res.end();
  }
}
