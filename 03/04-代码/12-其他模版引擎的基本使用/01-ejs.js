var ejs = require("ejs");
var path = require("path");
// var html = ejs.render("<div><%= name %></div>", {name:"zs"});
// console.log(html);

// var render = ejs.compile("<div><%= name %></div>");
// var html = render({name:"zs"});
// console.log(html);

var obj = {
  content:"大吉大利",
  list: [
    {name:"zs", age:18},
    {name:"ls", age:18},
    {name:"ww", age:18},
  ]
}
ejs.renderFile(path.join(__dirname, "index.html"), obj, function(err, str){
  console.log(str);
});