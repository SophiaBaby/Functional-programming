//call apply bind
let objA = {
    a:10,
    b:function () {
        console.log(this.a)
    }
}
let objB = {
    a:20,
    c:function () {
        console.log(this.a)
    }
}
objB.c();
objB.c.call(objA);
objB.c.apply(objA);
objB.c.bind(objA)();


//原型链
function Parent() {
    this.arr = [1]
    this.fun1 = function () {
        console.log('from parent')
    }
    Parent.prototype.fun = ()=>{
        console.log('来自原型')
    }
}

function Child() {
    this.fun2 = function () {
        console.log('from child')
    }
}


Child.prototype = new Parent();

let child = new Child();
let child1 = new  Child();
child.fun1();
child.fun1 = function(){
    console.log('哈哈哈 被我修改了')
}
child.fun2();
child1.fun1();
child.fun1();
child.fun();

child.arr.push('2');
console.log(child1.fun == child.fun)


//构造函数+call
function Fun() {
    this.a = 10;
    this.b = 90;
    this.c = ()=>{
        console.log('hhhhh')
    }
    Fun.prototype.d = function () {
        console.log('jjjjjj')
    }
}
function fun() {
    Fun.call(this)
}

let fun1 = new fun();
fun1.c()
// fun1.d()  无法继承原型的属性











//总结
//父类是构造函数时，私有属性不会被子类实例共享，prototype的可以
//调用call等的可以实现传递参数









