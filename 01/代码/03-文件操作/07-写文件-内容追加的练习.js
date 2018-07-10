var fs = require("fs");

fs.readFile("2.txt", "utf8", function(err, data){
  if(err) {
    console.log("读取文件内容失败");
    return;
  }

  fs.writeFile("2.txt", data + "需要追加的内容", function(err){
    if(err) {
      console.log("写入内容失败");
      return;
    }

    console.log("追加内容成功");
  })
});