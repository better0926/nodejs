//1. 导入
var express = require("express");

//2. 创建服务器
var app = express();

//3. 注册路由
/* 
  方式一： app.get()  app.post()
  app.get("/", function(req, res){

  })  
*/
// app.get("/index", function(req, res) {
//   res.send("你正在访问的是首页");
// });
// app.post("/add", function(req, res){
//   res.send("你正在访问的是添加页");
// });



/* 
  注册路由的第二种方式
  app.all(path, callback)
  不管get方式还是post方式，都能触发这个路由
*/
// app.all("/edit", function(req, res){
//   res.send("你正在访问编辑页");
// })


/* 
  注册路由的第三种方式
  app.use(path, callback)  
  不管是get请求还是post请求，use都可以使用

  use和all的区别：
    all:路径是精确匹配的
    use:路径要求只要是开头即可
*/
//localhost:9999/index.action:表示你要访问首页
app.post("/index.action", function(req, res){
  res.send("你正在访问删除页");

  //首页
  res.sendFile("index.html");
});

// app.use("/", function(req, res){
//   res.send("哈哈，所有的请求都以/开头");
// });

//如果第一个参数是/省略
app.use(function(req, res){
  res.send("哈哈");
});

//4. 启动服务器
app.listen(9999, function(){
  console.log("服务器启动成功了");
})



/* 
 1. app.get("/")   app.post("/add")
 2. app.all("/edit") localhost:9999/edit   不能localhost:9999/edit/aa
 3. app.use("/delete")  localhost:9999/delete localhost:9999/delete/aa
 
 4. app.use("/", function(){})// 监听所有的请求
    app.use(function(){})
*/