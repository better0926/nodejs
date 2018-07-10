/* 
  在nodejs中，提供了fs模块，这是node的核心模块
  注意：
    1. 除了global模块中的内容可以直接使用，其他模块都是需要加载的。
    2. fs模块不是全局的，不能直接使用。因此需要导入才能使用。
*/

//1. 导入fs模块
var fs = require("fs");

//参数1： 文件的路径
//参数2： 编码，如果设置了，返回一个字符串，如果没有设置，会返回一个buffer对象
//参数3： 回调函数
fs.readFile("data.txt", "utf8",function(err, data){
  console.log(err);
  console.log(data);
});