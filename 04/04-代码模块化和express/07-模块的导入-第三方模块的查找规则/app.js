require("./demo")
var mime = require("mime");
var template = require("art-template");

//加载第三方模块， 如何查找第三方模块

/* 

  1. 在当前目录下查找node_modules
  2. 在node_modules目录下查找mime目录
  3. 查找package.json文件， 查找main属性  模块的入口js文件
  4. 如果找不到main属性， 在当前目录下查找 index.js index.json index.node
  5. 说明当前目录下没有找到对应的包
  6. 去上一层目录，继续这个逻辑
  7. 如果找到盘符，还没有，找不到这个模块
*/
// console.log(mime);