/*
* 1.class A{}  var a = new A();
* A.constructor = a.prototype.constructor;
* 类的所有方法均为原型上的方法，对类进行添加方法：
*       Object.assign(a.prototype,{fun1,fun2...})
* 类内部的方法是不可枚举的；
*
* 2.类中默认含有constructor方法，new生成实例时会自动调用此方法，默认返回实例对象（this）
* 3.静态函数 static 中的this指向类而非实例   静态函数只能类.方法调用，不可以被实例调用，但是可以被子类继承
* */