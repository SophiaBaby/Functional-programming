let obj = {
  a:1,
  b:2
}
let b = obj;
b.c = 90
console.log( b);
console.log( obj);
let c = Object.assign({},obj,{c :80});
console.log(c);
console.log( obj);


// { a: 1, b: 2, c: 90 }
// { a: 1, b: 2, c: 90 }
// { a: 1, b: 2, c: 80 }
// { a: 1, b: 2, c: 90 }