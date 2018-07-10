var fs = require("fs");
//同步读取文件没有回调函数
//参数1：文件的路径
//参数2：文件的编码
//返回值就是读取的内容
console.log(1111);
//同步方法使用更简单，但是，如果文件比较大，会阻塞后续的代码执行。工作中少用
var result = fs.readFileSync("data.txt", "utf-8");
console.log(result);
console.log(2222);