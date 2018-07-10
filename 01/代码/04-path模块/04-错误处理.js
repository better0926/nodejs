//在js中，如果出现了错误，后续代码是不会执行的

/* 
  try {
    //容易出错的代码
  }catch(e) {
    //e就是错误信息,catch中的代码只有try中的代码报错了，才会执行。
    console.log(e);
  }finally {
    //不论出错还是不出错，都会执行的代码
  }
*/
try {
  console.log("这是有可能出错的代码")
  console.log(num);
}catch(e) {
  console.log(e);
} finally {
  console.log('无论如何，我都会执行');
}

console.log(111);


