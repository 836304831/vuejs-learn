

// 1. 使用commonjs的模块化导出规范
const {add, mul} = require("./js/mathUtils")
console.log('aaa');
console.log('bbb');

console.log(add(19, 20));
console.log(mul(10, 20));

// 2. 使用ES6的模块化导出规范
import {name, age, height} from "./js/info"

console.log(name);
console.log(age);
console.log(height);

// 3. 依赖css文件
require("./css/normal.css")

// 4. 依赖less文件引入
require("./css/special.less")


// 5. 使用Vue进行开发
// *************** vue代码结构调整 ***************************
import Vue from 'vue'

// 代码的结构优化，具体实现分别对应方法1，方法2，方法3
// 改进1： 在当前文件中定义App模板， 并在Vue实例中使用
// 改进2： 将App模板抽取出来，放到app.js文件中，在app.js中定义模板和数据，见vue/app.js
// 改进3： 创建App.vue文件，使用template，script和style标签，分别定义模板，脚本和样式， 使其各自独立

// 方法1：
// import App from './vue/app.js'

// 方法2：
import App from './vue/App.vue'

// 方法3：
// const App = {
//     template: `
//        <div>
//           <h2>{{msg}}</h2>
//        <button v-on:click="btnClick">按钮</button>
//        <h2>{{name}}</h2>
//        </div>`,
//     data() {
//         return {
//             msg: "hello webpack",
//             name: 'aaa'
//         }
//     },
//     methods: {
//         btnClick() {
//             console.log('btnClick');
//         }
//     }
// }
new Vue({
    el: "#app",
    template: '<App></App>',
    components: {
        App: App
    }
})