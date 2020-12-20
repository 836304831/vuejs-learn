const app = new Vue({
    el: "#app",
    data: {
        msg: "hello",
        booksInfo: [{
            id: 1,
            name: "算法导论",
            press: "2006-9",
            price: 85,
            count: 1,
        }, {
            id: 2,
            name: "UNIX编程艺术",
            press: "2006-2",
            price: 59,
            count: 1,
        }, {
            id: 3,
            name: "编程珠玑",
            press: "2008-10",
            price: 39,
            count: 1,
        }, {
            id: 4,
            name: "代码大全",
            press: "2006-3",
            price: 128,
            count: 1,
        }, {
            id: 5,
            name: "操作系统",
            press: "2010-3",
            price: 130,
            count: 1,
        }]
    },
    methods: {
        addBook(index) {
            this.booksInfo[index].count += 1
        },
        subBook(index) {
            this.booksInfo[index].count -= 1
        },
        removeBook(index) {
            this.booksInfo.splice(index, 1)
        },
        getFinalPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    computed: {
        totalPrice() {
            sumPrice = 0
            // 遍历方法1
            // for (let i=0; i < this.booksInfo.length; i++) {
            //     sumPrice += this.booksInfo[i].count * this.booksInfo[i].price
            // }

            // 遍历方法2
            // for (let i in this.booksInfo) {
            //     sumPrice += this.booksInfo[i].count * this.booksInfo[i].price
            // }

            // 遍历方法3
            // for (let book of this.booksInfo) {
            //     sumPrice += book.count * book.price
            // }

            // 遍历方法4, 利用高阶函数
            sumPrice = this.booksInfo.reduce(function (pre, item) {
                return pre + item.count * item.price
            }, 0)
            return sumPrice
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})
