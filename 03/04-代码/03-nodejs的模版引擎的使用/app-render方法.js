var template = require("art-template");
var path = require("path");
var fs = require("fs");

//参数1： 模版的字符串
//参数2： 数据
//返回值： 渲染好的数据
//var html = template.render("<div>{{name}}</div>", {name:"zs"});
//console.log(html);
var obj = {
  content: '大吉大利',
  list: [
    {name:"zs", age:18},
    {name:"ls", age:19},
    {name:"ww", age:20}
  ]
}

fs.readFile("index.html", "utf-8", function(err, data){
 var html =  template.render(data, obj);
  console.log(html);
});



