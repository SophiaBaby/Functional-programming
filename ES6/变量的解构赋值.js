//数组的解构赋值
let [foo,[foo1,foo2]] = [1,[2,3]];
console.log(foo1);2

let [head,...tail] = [1,2,3,4];
console.log(tail) //[2,3,4]

