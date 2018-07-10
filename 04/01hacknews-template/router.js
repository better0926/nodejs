

var querystring = require("querystring");
var handler = require("./handler");
module.exports = function(req,res){

  var url = req.url;
  var method = req.method.toLowerCase();

  if (url === "/" || url === "/index") {
    
    handler.showIndex(req,res);
    
  } else if (url.startsWith("/details")) {
    handler.showDetails(req,res);
    

  } else if (url.startsWith("/submit")) {

    handler.showSubmit(req,res);

  } else if (url.startsWith("/add") && method == "get") { //请求方式为get的情况
    handler.addGet(erq,res);

  } else if (url.startsWith("/add") && method == "post") { //post请求
    //
    handler.addPost(req,res);

  } else if (url.startsWith("/assets")) {
    handler.showStatic(req,res);

  } else {
    handler.showErr(req,res);
  }

}