

// 1. 使用commonjs的模块化导出规范
const {add, mul} = require("./mathUtils")
console.log('aaa');
console.log('bbb');

console.log(add(19, 20));
console.log(mul(10, 20));

// 2. 使用ES6的模块化导出规范
import {name, age, height} from "./info"

console.log(name);
console.log(age);
console.log(height);