var add = function (x, y) {
    return x + y;
}

var add1 = function (x) {
    return function (y) {
        return x + y;
    }
}

//add1 = x => (y => x +y)

let a = add(1,2);
let b = add1(1)(2);
console.log(a,b);