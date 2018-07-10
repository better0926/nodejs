/* 
  在nodejs中，提供了fs模块，这是node的核心模块
  注意：
    1. 除了global模块中的内容可以直接使用，其他模块都是需要加载的。
    2. fs模块不是全局的，不能直接使用。因此需要导入才能使用。
*/

//1. 导入fs模块
var fs = require("fs");

//2. 调用fs的读文件方法
//参数1： 文件的名字
//参数2： 读取文件的回调函数
  //参数1：错误对象，如果读取失败，err会包含错误信息，如果读取成功，err是null
  //参数2：读取成功后的数据（是一个Buffer对象）
fs.readFile("data.txt", function(err, data){
  console.log(err);
  console.log(data.toString());
});