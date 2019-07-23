//函数的合成： 一个值通过多个函数变成另一个值 把中间的函数都合成一个函数就是 函数的合成
//f(x)和g(x)合成的前提是f，g只接受一个参数 ----->
//柯里化：把一个多参数的函数转化为单参数函数
const compose = function (f, g) {
    return function (x) {
        return f(g(x))
    }
}


// 柯里化之前
function add(x, y) {
    return x + y;
}

add(1, 2) // 3

// 柯里化之后
function addX(y) {
    return function (x) {
        return x + y;
    };
}

addX(2)(1) // 3
