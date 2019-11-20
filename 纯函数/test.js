function add(a) {
  function sum(b) { // 使用闭包
    a = a + b; // 累加
    return sum;
  }
  sum.toString = function() { // 重写toString()方法
    return a;
  }
  return sum; // 返回一个函数
}

console.log(add(1)(2))
add(1); // 1
add(1)(2);  // 3
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10

let obj={
  a:1,
  b:2
}
let n1 = {
  a:2,
  b:5
};

[obj,n1] = [n1,obj]
n1.c = 6;
console.log(n1)
console.log(obj)