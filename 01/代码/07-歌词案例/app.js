//思路：获取到 分 秒 毫秒  获取到歌词
var fs = require("fs");

fs.readFile("./我不愿让你一个人.lrc", "utf8" ,function(err, data) {
  if(err) {
    return console.log(err);
  }

  console.log(data);
});