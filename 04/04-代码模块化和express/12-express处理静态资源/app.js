var express = require("express");

var app =express();


//http://localhost:9999/pages/list.html
//http://localhost:9999/index.html
//http://localhost:9999/150.jpg


// http://localhost:9999/static/index.html
app.use( "/pages", express.static("pages")  );
//app.use( "/static", express.static("public")  );

app.listen(9999, function(){
  console.log("ok");
})