/* 

  在nodejs中，模块一共分为3类：
    1. nodejs提供的核心模块  fs http path url querystring   
      不需要安装，直接导入就可以使用

    2. 第三方模块： 一般由社区或者是个人。
      需要先用npm安装，在导入就可以使用

    3. 自定义模块（自己写的js文件）
      导入的时候一定要是相对路径 ./  ../
*/

//加载核心模块
require("fs");


//mime: 第三方模块
var mime = require("mime");
var result = mime.getType("index.html");
console.log(result);


//加载自定义模块
require("./a");