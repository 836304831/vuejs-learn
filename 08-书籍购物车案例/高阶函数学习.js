
// ******** 高阶函数学习 *********************
// 高阶函数 filter/map/reduce
const nums = [10, 110, 20, 40, 200, 30, 60]

// 1. filter的使用
// filter函数要求:必须返回一个boolean值
// true: 函数内部会自动将这次回调的值加入到新的数组中
// false: 内书内部会自动过滤掉这次的值
let newNums = nums.filter(function (value) {
    // 过滤出小于100的值
    return value < 100
})
console.log(newNums);

// 2. map函数的使用
let new2Nums = newNums.map(function (value){
    return value*2
})
console.log(new2Nums);


// 2. reduce函数的使用
// reduce作用: 对数组中所有的内容进行汇总
let total = new2Nums.reduce(function (preValue, value){
    return preValue + value
}, 0)
console.log(total);

// 等同上面的结果
let total2 = nums.filter(function (value) {
    return value < 100
}).map(function (value) {
    return value * 2
}).reduce(function (prevalue, value) {
    return prevalue + value
}, 0)

console.log(total2);

// 等同上面的结果
let total3 = nums.filter(value => value < 100).map(value => value * 2).reduce(
    (previousValue, currentValue) => previousValue + currentValue)
console.log(total3);
