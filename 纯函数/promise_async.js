const p = Promise.resolve();

(async () => {
  await p; console.log('after:await');
})();

p.then(() => console.log('tick:a'))
  .then(() => console.log('tick:b'));


async function charCountAdd(data1, data2) {
  const d1=await charCount(data1);
  const d2=await charCount(data2);
  return d1+d2;
}
charCountAdd('Hello','Hi').then(console.log);//通过then获取异步函数的返回值。
function charCount(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.length);
    }, 1000);
  });
}