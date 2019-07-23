//计数排序 时间复杂度O(n+k)
// 1.查找数组中的最大值min和最小值max
// 2.创建统计数组max-min 将数组的最小值作为偏移量
// 3.数值减偏移量就是数组的下标值

// eg：1，3，5，9，5，3，6
// 0  1  2  3  4  5  6  7  8  9  【数组下标】
// 0  1  0  2  0  2  1  0  0  1  【把值当作下标】
//    1     33    55 6        9  【排序结果】
function countingSort(arr) {
  let max = Math.max(arr);
  let min = Math.min(arr);
  let tempArr = [];
  for(let i =0 ;i < max - min ; i ++){
   console.log(i)
  }
}
let arr = [1,3,5,9,5,3,6]
countingSort(arr);