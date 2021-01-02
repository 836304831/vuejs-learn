
export default {
    template: `
       <div>
          <h2>{{msg}}</h2>
       <button v-on:click="btnClick">按钮</button>
       <h2>{{name}}</h2>
       </div>`,
    data() {
        return {
            msg: "hello webpack",
            name: 'aaa'
        }
    },
    methods: {
        btnClick() {
            console.log('btnClick');
        }
    }
}
