var _ = require("underscore");

//console.log( _.uniq([1,2,2,1,1,1,1,2,3,4,5,3,2]) );


var render = _.template("<div><%= name %></div>");
var str = render({name:'zs'});
console.log(str);


//compile template  render   renderFile
//渲染一个文件
//渲染一个字符串
//渲染一个字符串，返回一个函数