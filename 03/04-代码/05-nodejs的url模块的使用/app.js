var url = require("url");

var str = "http://www.baidu.com:8080/aa/bb/index.html?id=1&name=zs&age=18";

var result = url.parse(str, true);
console.log(result.query.id);