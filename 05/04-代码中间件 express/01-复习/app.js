var express = require("express");

var app = express();

//注册路由
/* 
  3种注册路由的方式
    1. app.get  app.post()
    2. app.all()  get方式和post方式

    // /index /details
    3. app.use("/", function(){})  get方式和post方式都支持  所有的路径都能匹配


    //处理静态资源

*/

/* 
  public就是静态资源的目录
  所有以 /开始的路径，都会去public中尝试着查找，如果查找到了，直接返回

  配置虚拟目录
*/
//localhost:9999/public/index.html
app.use("/public", express.static("public"));


/* 
  req对象
    req.path:路径    /details     /details?id=1&namme=zs    查询字符串：querystring
    req.url: url地址
    req.query: 获取get请求的参数
    req.body:  获取post请求的参数
  res对象
    res.send():  //字符串 对象  数组  buffer对象 
    res.sendFile()//发送文件
    res.set()设置响应头
    res.status():设置状态码
    res.sendStatus():设置状态码
    res.redirect():重定向
*/

app.get("/", function(req, res){
  res.send("哈哈");
});


app.listen(9999, function(){
  console.log("服务器启动成功了");
})