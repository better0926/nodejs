var name = "zs";
var age = 18;


//在每一个模块的内部，都有一个对象，对象叫做 module, module对象表示的就是当前模块本身。
//module对象有一个属性 exports, 这个属性就是模块的导出内容

//以后，想要模块有导出（其他某个能够使用）
// module.exports.name = name;
// module.exports.age = age;
// module.exports.sayHi = function() {
//   console.log("哈哈");
// }

//模块内部为了大家方便使用， 还有一个变量  exports
//exports 属性 指向了 module.exports 
//var exports = module.exports
exports.name = "zs";
exports.age = 18;
exports.sayHi = function() {
  console.log("哈哈");
}
