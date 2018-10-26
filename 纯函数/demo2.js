//任何具有map方法的数据结构，都可以当作函子的实现。
class Functor {
    constructor(val) {
        this.val = val;
    }

    map(f) {
        return new Functor(f(this.val));
    }
}

(new Functor(2)).map(function (two) {
    return two + 2;
});
// Functor(4)

(new Functor('flamethrowers')).map(function(s) {
    return s.toUpperCase();
});
// Functor('FLAMETHROWERS')

//函数式编程一般约定，函子有一个of方法，用来生成新的容器

Functor.of = function(val) {
    return new Functor(val);
};
Functor.of(2).map(function (two) {
    return two + 2;
});

//Maybe 函子就是为了解决这一类问题而设计的。简单说，它的map方法里面设置了空值检查。
class Maybe extends Functor {
    map(f) {
        return this.val ? Maybe.of(f(this.val)) : Maybe.of('a');
    }
}

// Maybe.of(null).map(function (s) {
//     return s.toUpperCase();
// });


//条件运算if...else是最常见的运算之一，函数式编程里面，使用 Either 函子表达。
// Either 函子内部有两个值：左值（Left）和右值（Right）。右值是正常情况下使用的值，左值是右值不存在时使用的默认值。
class Either extends Functor {
    super(left, right) {
        this.left = left;
        this.right = right;
    }

    map(f) {
        return this.right ?
            Either.of(this.left, f(this.right)) :
            Either.of(f(this.left), this.right);
    }
}

Either.of = function (left, right) {
    return new Either(left, right);
};

var addOne = function (x) {
    console.log(x)
    return x + 1;
};

Either.of(5, 6)
    .map(addOne);
// Either(5, 7);

Either.of(1, null)
    .map(addOne);
// Either(2, null);


//自我总结：函数时编程就是是函数尽可能的纯粹，并且实现链式操作