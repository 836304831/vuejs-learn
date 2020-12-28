var name = "小明"

function sum(num1, num2) {
    return num1 + num2
}

var flag = true
if (flag) {
    console.log(sum(10, 20));
}


// 导出模块变量和函数
module.exports = {
    flag: flag,
    sum: sum
}
