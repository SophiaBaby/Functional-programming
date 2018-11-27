const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    new Promise((resolve, reject) =>
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve))
    baz()
}

foo()

//ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015).
// It’s a way to execute the result of an async function as soon as possible,
// rather than being put at the end of the call stack.
// That’s a big difference between Promises (and Async/await, which is built on promises)
// and plain old asynchronous functions through setTimeout() or other platform APIs.

let p = new Promise((resolve,reject) => {
    reject('error');
});

p.catch(result => {
    console.log(result);
})



//https://blog.csdn.net/major_zhang/article/details/79154287
//setTimeout,await,promise
setTimeout(()=>{console.log('outTime')},0)
async function demo() {
    let result01 = await sleep(100);
    sleep(200).then((res)=>{console.log(res)})
    //上一个await执行之后才会执行下一句
    let result02 = await sleep(result01 + 100);
    console.log('huhu')
    let result03 = await sleep(result02 + 100);
    // console.log(result03);
    return result03;
}

demo().then(result => {
    console.log(result);
});
function sleep(wait) {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            console.log('time 0')
        },0)
        setTimeout(() => {
            console.log('time',wait)
            res(wait);
        },wait);
    });
}