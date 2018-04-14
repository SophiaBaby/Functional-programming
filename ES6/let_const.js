/*
{
    let a = 10,b = 20;
}
//console.log(a,b); //a is not defined

var a = [];
for(var i = 0; i < 10;i ++){
    a[i] = function () {
        console.log(i)
    }
}
a[6]();//10



var a = [];
for(var i = 0; i < 10;i ++){
    a[i] = (function (i) {
        return i
    })(i)
}
console.log(a)


var a = [];
for(let i = 0; i < 10;i ++){
    a[i] = function () {
        console.log(i)
    }
}
a[6]();//6


for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);//abc,abc,abc
}


//暂时性死区
var tmp = 123;
if (true) {
    typeof tmp;
    tmp = 'abc'; // ReferenceError
    let tmp;
}
*/

//  ** ES6允许在块级作用域中声名变量，但是会像let一样发生变量提升


/*
    const 表示常量，一旦赋值无法改变


    ES6声名变量的6种方法  let const var function import class
 */
































