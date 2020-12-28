
let name = "小明"
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

var flag = true
if (flag) {
    console.log(sum(10, 20));
}

// 导出方式一
export {
    flag, sum
}

// 导出方式二
export var num1 = 1000;
export var height = 188

// 导出函数/类
export  function add(num1, num2) {
    return num1 * num2
}

// 导出类
export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    run() {
        console.log("running");
    }
}

// export default
// 用户使用时可以自定义变量名, 每个模块只能有一个default
const  address = '深圳'
export default address