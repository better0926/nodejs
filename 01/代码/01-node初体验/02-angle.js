/**
 * Created by HUCC on 2018/5/26.
 */
for(var i = 0; i < 10; i++) {
  var str = "";
  for(var j = 0; j < i; j++) {
    //nodejs中的console.log()会自动添加一个换行
    str += "*";
  }
  console.log(str);

  //在nodejs中，无法使用BOM和DOM相关的属性和方法。
  document.write("*");
}