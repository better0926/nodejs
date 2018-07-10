var http = require("http");

var server = http.createServer();

server.on('request', function(req, res){

  //让浏览器1以utf8的编码来解析
  //res.setHeader("content-type", "text/html;charset=utf-8");
  //res.statusCode = 404;
  //不需要设置statusMessage,因此会自动跟着statusCode变化
  //res.statusMessage = "哈哈";
   //方法3.设置响应头
   //res.setHeader("content-type", "text/html;charset=utf-8");


  //方法4：writeHead(状态码, 状态消息, 响应头)
  res.writeHead(404, {
    "content-type":'text/html;charset=utf-8',
    "aa": "bb"
  });

  //方法1：write方法： 作用：往浏览器发送一块响应体，调用多次，最终拼接完整的响应
  res.write("中文");
  res.write("会乱码吗");

  //方法2： end方法： 作用：结束本次响应，每次响应必须要有end方法
  res.end("ok");// res.write("ok")  res.end();


 
});

server.listen(9999, function(){
  console.log("服务器启动成功了");
});




/* 

  res.write(data): 发送一段响应体, 多次调用
  res.end(): 结束响应   res.end(data)

  res.setHeader(name, value): 设置响应头

  res.statusCode ： 设置状态码  一般 404 500
  res.statusMessage: 一般不设置，只要设置statusCode即可
  res.writeHead(statusCode ,statusMessage, header);

*/