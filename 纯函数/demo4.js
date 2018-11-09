//reduce
let data = [{
    id: 1,
    type: 'A',
    total: 3
}, {
    id: 2,
    type: 'B',
    total: 5
}, {
    id: 3,
    type: 'E',
    total: 7
}]

let total = data.reduce((sum,{total})=>{
    return sum + total
},0)

console.log(total)

let str = data.reduce((str,{id,type})=>{
    return str + `id:${id},type:${type};`
},'')

console.log(str)

let obj = data.reduce((res,{id,type,total})=>{
    res[id]={
        type,
        total
    }
    return res;
},{})
console.log(obj)