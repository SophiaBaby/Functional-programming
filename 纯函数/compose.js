const compose = (first, ...last) => (...initArgs) =>
  last.reduce((composed, func) =>
    func(composed), first(...initArgs))

var  arr = [1, 2, 3, 4, 5];
sum = arr.reduce(function(prev, cur, index, arr) {
  console.log(prev, cur, index);
  return prev + cur;
})
console.log(arr, sum);


function map(f,arr) {
  arr.reduce((result,cur)=>{
    result.push(f(cur))
    return result
  },[])
}

const concat = (...funcs) => (...args) =>
  funcs.reduce((returns, func) =>
    [...returns, func(...args)], [])


function before(...args){
  console.log('_____________________')
  console.log(...args)
  return '验证通过'
}

function upload(...args){
  console.log('_____________________')

  console.log(...args)
  return '上传完毕'
}

function after (...args) {
  console.log('_____________________')

  console.log(...args)
  return '本地缓存完毕'
}

const handle = concat(before, upload, after)

console.log(handle({
  name: 'test.txt',
  path: '/user/lihongji/work/test.txt',
  size: '15kb',
}))