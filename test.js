function isInList(lists, list) {
    list = bubbelSort(list)
    return lists.some((item) => {
        var a = item+'';
        var b = list + '';
        console.log(a,b  ,a == b)
        return item+'' === (list+'');
    })
}
function bubbelSort(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i -1; j++) {
            if (Number(arr[j].split(':')[0]) > Number(arr[j + 1].split(':')[0])) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr =[
    ["3:20"],
    ["39:36"],
    ["3:20", "39:36"],
    ["3:15"],
    ["39:40"],
    ["3:15", "39:40"],
    ["3:20"],
    ["39:38"],
    ["3:20", "39:38"],
    ["3:15"],
    ["39:43"],
    ["3:15", "39:43"]
]
var list = ["39:38", "3:20","67:09","9:10","10:9"]
console.log(isInList(arr,list))

// result = {}
// list.map((item)=>{
//     var item = item.split(':');
//     result[item[0]]=item[1]
// })
// var arr = []
// Object.keys(result).map((key)=>{
//     let item  = key+':'+result[key]
//     arr.push(item)
// })
// console.log(arr)