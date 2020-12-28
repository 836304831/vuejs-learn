
// 只有在import js(index.html)文件时,使用了type="module"属性才能这样导入
import {flag, sum} from "./aaa.js";

// 2. 直接导入export定义的变量
import {height, num1, add} from "./aaa.js";

// 3. 导入export的function和class
import {Person} from "./aaa.js";

// 4. 导入export default中的内容
import aaa from "./aaa.js"

// 5. 统一全部导入
import * as obj from "./aaa.js"

console.log(sum(40, 50));
console.log(num1);
console.log(height);
console.log(add(90, 80));
console.log(aaa);

console.log(obj.flag);


if (flag) {
    console.log("小明是天才");

}