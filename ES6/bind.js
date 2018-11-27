var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');

Function.prototype.bind = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};

    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();
    return fbound;
}

function debounce(fn, delay){
    let timer = null
    return function(){
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}

function throttle(fn, threshold){
    var last
    var timer
    threshold || (threshold = 250)
    return function(){
        let context = this
        let args = arguments
        var now = +new Date()
        if(last&&now<last+threshold){
            clearTimeout(timer)
            timer = setTimeout(function(){
                last = now
                fn.apply(context, args)
            },threshold)
        }else {
            last = now
            fn.apply(context, args)
        }
    }
}