var template = require("art-template");
var path = require("path");
//参数1：模版的文件名, 一定要是绝对路径
//参数2：数据
//返回值：html的结构
//var html = template(path.join(__dirname, "index.html"), {name: "zs"});
//console.log(html);


var obj = {
  content: '大吉大利',
  list: [
    {name:"zs", age:18},
    {name:"ls", age:19},
    {name:"ww", age:20}
  ]
}

var html = template(path.join(__dirname, "index.html"), obj);
console.log(html);