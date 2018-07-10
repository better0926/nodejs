

//一个模块内部的东西都是局部，访问不了
//别的模块加载本模块，获取的只能 module.exports属性
module.exports = {
  name:"zs",
  age: 18
};

exports.gender = "男";

//结论：
  //可以通过exports和module.exports来导出内容， exports一开始指向了module.exports
  // 如果是给导出对象增加属性， exports和module.exports
  // 如果是赋值，替换原来的对象， 只能module.exports


  //最终模块导出的内容是  module.exports

  //以后，如果不想模块化的导出搞混的话，
  //都用module.exports即可， exports


