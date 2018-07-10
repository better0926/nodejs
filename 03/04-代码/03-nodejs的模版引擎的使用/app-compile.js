var template = require("art-template");
var path = require("path");
var fs = require("fs");


//参数：字符串
//返回值：函数,函数能够渲染数据
var render = template.compile("<div>{{name}}</div>");

var html = render({name: 'zs'});
console.log(html);

var html1 = render({name: 'ls'});
console.log(html1);
