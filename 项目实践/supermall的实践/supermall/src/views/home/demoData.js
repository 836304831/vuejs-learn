
export function  getHomeMulitdataDemo() {
  return {
    data: {
      banner: {
        list: [{
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/swiper/girl-4898696__340.webp')
        },{
            link: 'baidu.com',
            image: require('../../assets/server/imgs/home/swiper/girl-5679419__340.webp')
        }, {
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/swiper/girl-5691576__340.webp')
        }, {
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/swiper/girl-5846483__340.webp')
        }]
      },
      recommend: {
        list: [{
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/recommend/woman-5584374__340.webp')
        }, {
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/recommend/woman-5585332__340.webp')
        }, {
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/recommend/woman-5828786__340.webp')
        }, {
          link: 'baidu.com',
          image: require('../../assets/server/imgs/home/recommend/woman-5978200__340.webp')
        }]
      }
    }
  }
}

export function getHomeGoodsDemo(type) {
  if (type == "pop") {
    return getPopDemoData()
  } else if(type=='new') {
    return getNewDemoData()
  }else if(type=='sell') {
    return getSellDemoData()
  }else{
    console.log('goods type error' + type)
  }
}



function getPopDemoData() {
  return {
    data: {
      list:  [{
        price: 190,
        cfav: 200,
        show: {
          img: require('../../assets/server/imgs/home/goods/pop/cute-4436103__340.webp')
        },
      }, {
        price: 149,
        cfav: 160,
        show: {
          img: require('../../assets/server/imgs/home/goods/pop/field-5430070__340.jpg')
        }
      }, {
        price: 600,
        cfav: 10,
        show: {
          img: require('../../assets/server/imgs/home/goods/pop/girl-4898696__340.webp')
        }
      }, {
        price: 350,
        cfav: 11,
        show: {
          img: require('../../assets/server/imgs/home/goods/pop/girl-5679419__340.webp')
        }
      }, {
        price: 450,
        cfav: 25,
        show: {
          img: require('../../assets/server/imgs/home/goods/pop/girl-5691576__340.webp')
        }
      }, {
        price: 550,
        cfav: 100,
        show: {
          img: require('../../assets/server/imgs/home/goods/pop/girl-5785590__340.webp')
        }
      }]
    }
  }
}


function getNewDemoData() {
  return {
    data: {
      list:  [{
        price: 190,
        cfav: 200,
        show: {
          img: require('../../assets/server/imgs/home/goods/new/beach-5064674__340.webp')
        },
      }, {
        price: 149,
        cfav: 160,
        show: {
          img: require('../../assets/server/imgs/home/goods/new/boat-5000655__340.webp')
        }
      }, {
        price: 600,
        cfav: 10,
        show: {
          img: require('../../assets/server/imgs/home/goods/new/book-5953965__340.webp')
        }
      }, {
        price: 350,
        cfav: 11,
        show: {
          img: require('../../assets/server/imgs/home/goods/new/chapel-5878656__340.webp')
        }
      }, {
        price: 450,
        cfav: 25,
        show: {
          img: require('../../assets/server/imgs/home/goods/new/child-5943325__340.webp')
        }
      }, {
        price: 550,
        cfav: 100,
        show: {
          img: require('../../assets/server/imgs/home/goods/new/couple-3467634__340.webp')
        }
      }]
    }
  }
}

function getSellDemoData() {
  return {
    data: {
      list:  [{
        price: 190,
        cfav: 200,
        show: {
          img: require('../../assets/server/imgs/home/goods/sell/girl-5819711__340.webp')
        },
      }, {
        price: 149,
        cfav: 160,
        show: {
          img: require('../../assets/server/imgs/home/goods/sell/girl-5846483__340.webp')
        }
      }, {
        price: 600,
        cfav: 10,
        show: {
          img: require('../../assets/server/imgs/home/goods/sell/girls-5845644__340.webp')
        }
      }, {
        price: 350,
        cfav: 11,
        show: {
          img: require('../../assets/server/imgs/home/goods/sell/horse-5628881__340.webp')
        }
      }, {
        price: 450,
        cfav: 25,
        show: {
          img: require('../../assets/server/imgs/home/goods/sell/milan-cathedral-2436458__340.webp')
        }
      }, {
        price: 550,
        cfav: 100,
        show: {
          img: require('../../assets/server/imgs/home/goods/sell/mountain-5795883__340.webp')
        }
      }]
    }
  }
}
