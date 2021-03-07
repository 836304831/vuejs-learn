
export function getDetailDataDemo(iid) {
  const int_id = parseInt(iid) % 6
  const DetailSwiperData = {
    0: {
      result: {
        columns: [
          '销量 1580',
          '收藏 58',
          '默认快递',
        ],
        shopInfo: {
          shopLogo: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          name: "仲陌美",
          cFans: 1000,
          cSells: 20001,
          score: [
            {
              isBetter: false,
              name: "商品相符",
              score: 4.64
            }, {
              isBetter: true,
              name: "价格合理",
              score: 5
            }, {
              isBetter: true,
              name: "质量满意",
              score: 4.8
            }
          ],
          cGoods: 500,

          services: [{
            name: '退货补运费',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          },{
            name: '72小时发货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }]
        },
        itemInfo: {
          desc: '新款上市',
          discountDesc: '活动价',
          price: '￥38.5',
          oldPrice: '￥69.0',
          readPrice: '38.5',
          title: "【仲陌美】2021年春季新款长袖T恤学生韩版复古白色青春靓丽款",
          topImages: [
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp'),
            require('../../assets/server/imgs/detail/swiper/boat-5000655__340.webp'),
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp'),
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp')
          ]
        },
        detailInfo: {
          desc: '新款上市',
          detailImage: [{
            key: '穿着效果',
            desc: '',
            list: [
              require('../../assets/server/imgs/detail/detailinfo/woman-5665943__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5828786__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5978200__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-6010056__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/world-trade-center-5889199__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/yoga-5281457__340.webp')
            ]
          }]
        },
        itemParams: {
          info: {
            anchor: 'prodcut_info',
            key: '产品参数',
            set: [{
              key: '图案',
              value: '宫廷复古图/民族复古图， 字母/文字/数字'
            },{
              key: '厂名',
              value: 'acedar'
            },{
              key: '颜色',
              value: '黑白凭拼接'
            },{
              key: '袖型',
              value: '常规袖'
            },{
              key: '上衣厚度',
              value: '适中'
            }]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: "* 以上尺寸为实物人工测量，因测量但是不同，会有1-2cm误差",
            key: "尺码说明",
            tables: [[
              ['尺码', 'M', 'L', 'XL', 'XXL'],
              ['衣长', '61.5', '63', '64.5', '66'],
              ['胸围', '98', '104', '110', '116'],
              ['袖长', '63', '66', '68.5', '70.5'],
            ]]
          }
        },
        rate: {
          Crate: 1,
          list: [{
            created: 1535804719,
            user: {
              avatar: require('../../assets/server/imgs/detail/commentinfo/profile.jpg'),
              uname: 'acedar'
            },
            content: '很好，很nice',
            style: 'M 白色',
            images: [
              require('../../assets/server/imgs/detail/commentinfo/mountain-5795883__340.webp'),
            ]
          }]
        }
      }
    },
    1: {
      result: {
        columns: [
          '销量 600',
          '收藏 70',
          '默认快递',
        ],
        shopInfo: {
          shopLogo: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          name: "美特斯邦威",
          cFans: 256,
          cSells: 2001,
          score: [
            {
              isBetter: false,
              name: "商品相符",
              score: 4.64
            }, {
              isBetter: true,
              name: "价格合理",
              score: 5
            }, {
              isBetter: true,
              name: "质量满意",
              score: 4.8
            }
          ],
          cGoods: 460,
          services: [{
            name: '7天无理由退货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          },{
            name: '全国包邮',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }]
        },
        itemInfo: {
          desc: '新款上市',
          discountDesc: '活动价',
          price: '￥120.5',
          oldPrice: '￥150.0',
          readPrice: '30',
          title: "【美特斯邦威】2021年春季新款长袖T恤学生韩版复古白色青春靓丽款",
          topImages: [
            require('../../assets/server/imgs/detail/swiper/boat-5000655__340.webp'),
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp')
          ]
        },
        detailInfo: {
          desc: '新款上市',
          detailImage: [{
            key: '穿着效果',
            desc: '',
            list: [
              require('../../assets/server/imgs/detail/detailinfo/woman-5665943__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5828786__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5978200__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-6010056__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/world-trade-center-5889199__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/yoga-5281457__340.webp')
            ]
          }]
        },
        itemParams: {
          info: {
            anchor: 'prodcut_info',
            key: '产品参数',
            set: [{
              key: '图案',
              value: '宫廷复古图/民族复古图， 字母/文字/数字'
            },{
              key: '厂名',
              value: 'acedar'
            },{
              key: '颜色',
              value: '黑白凭拼接'
            },{
              key: '袖型',
              value: '常规袖'
            },{
              key: '上衣厚度',
              value: '适中'
            }]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: "* 以上尺寸为实物人工测量，因测量但是不同，会有1-2cm误差",
            key: "尺码说明",
            tables: [[
              ['尺码', 'M', 'L', 'XL', 'XXL'],
              ['衣长', '61.5', '63', '64.5', '66'],
              ['胸围', '98', '104', '110', '116'],
              ['袖长', '63', '66', '68.5', '70.5'],
            ]]
          }
        },
        rate: {
          Crate: 1,
          list: [{
            created: 1535804719,
            user: {
              avatar: require('../../assets/server/imgs/detail/commentinfo/profile.jpg'),
              uname: 'acedar'
            },
            content: '很好，很nice',
            style: 'M 白色',
            images: [
              require('../../assets/server/imgs/detail/commentinfo/mountain-5795883__340.webp'),
            ]
          }]
        }
      }
    },
    2: {
      result: {
        columns: [
          '销量 8000',
          '收藏 2001',
          '默认快递',
        ],
        shopInfo: {
          shopLogo: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          name: "耐克",
          cFans: 456,
          cSells: 8001,
          score: [
            {
              isBetter: false,
              name: "商品相符",
              score: 4.64
            }, {
              isBetter: true,
              name: "价格合理",
              score: 5
            }, {
              isBetter: true,
              name: "质量满意",
              score: 4.8
            }
          ],
          cGoods: 2500,
          services: [{
            name: '退货补运费',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          },{
            name: '72小时发货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }]
        },
        itemInfo: {
          desc: '新款上市',
          discountDescDesc: '活动价',
          price: '￥1222.5',
          oldPrice: '￥2222.5',
          readPrice: '1000',
          title: "【耐克】2021年春季新款长袖T恤学生韩版复古白色青春靓丽款",
          topImages: [
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp')

          ]
        },
        detailInfo: {
          desc: '新款上市',
          detailImage: [{
            key: '穿着效果',
            desc: '',
            list: [
              require('../../assets/server/imgs/detail/detailinfo/woman-5665943__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5828786__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5978200__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-6010056__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/world-trade-center-5889199__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/yoga-5281457__340.webp')
            ]
          }]
        },
        itemParams: {
          info: {
            anchor: 'prodcut_info',
            key: '产品参数',
            set: [{
              key: '图案',
              value: '宫廷复古图/民族复古图， 字母/文字/数字'
            },{
              key: '厂名',
              value: 'acedar'
            },{
              key: '颜色',
              value: '黑白凭拼接'
            },{
              key: '袖型',
              value: '常规袖'
            },{
              key: '上衣厚度',
              value: '适中'
            }]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: "* 以上尺寸为实物人工测量，因测量但是不同，会有1-2cm误差",
            key: "尺码说明",
            tables: [[
              ['尺码', 'M', 'L', 'XL', 'XXL'],
              ['衣长', '61.5', '63', '64.5', '66'],
              ['胸围', '98', '104', '110', '116'],
              ['袖长', '63', '66', '68.5', '70.5'],
            ]]
          }
        },
        rate: {
          Crate: 1,
          list: [{
            created: 1535804719,
            user: {
              avatar: require('../../assets/server/imgs/detail/commentinfo/profile.jpg'),
              uname: 'acedar'
            },
            content: '很好，很nice',
            style: 'M 白色',
            images: [
              require('../../assets/server/imgs/detail/commentinfo/mountain-5795883__340.webp'),
            ]
          }]
        }
      }
    },
    3: {
      result: {
        columns: [
          '销量 5000',
          '收藏 1523',
          '默认快递',
        ],
        shopInfo: {
          shopLogo: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          name: "乔丹",
          cFans: 890,
          cSells: 9001,
          score: [
            {
              isBetter: false,
              name: "商品相符",
              score: 4.64
            }, {
              isBetter: true,
              name: "价格合理",
              score: 5
            }, {
              isBetter: true,
              name: "质量满意",
              score: 4.8
            }
          ],
          cGoods: 1200,
          services: [{
            name: '72小时发货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }, {
            name: '7天无理由退货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }]
        },
        itemInfo: {
          desc: '新款上市',
          discountDesc: '活动价',
          price: '￥500',
          oldPrice: '￥800',
          readPrice: '300',
          title: "【乔丹】2021年春季新款长袖T恤学生韩版复古白色青春靓丽款",
          topImages: [
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp'),
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp')
          ]
        },
        detailInfo: {
          desc: '新款上市',
          detailImage: [{
            key: '穿着效果',
            desc: '',
            list: [
              require('../../assets/server/imgs/detail/detailinfo/woman-5665943__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5828786__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5978200__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-6010056__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/world-trade-center-5889199__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/yoga-5281457__340.webp')
            ]
          }]
        },
        itemParams: {
          info: {
            anchor: 'prodcut_info',
            key: '产品参数',
            set: [{
              key: '图案',
              value: '宫廷复古图/民族复古图， 字母/文字/数字'
            },{
              key: '厂名',
              value: 'acedar'
            },{
              key: '颜色',
              value: '黑白凭拼接'
            },{
              key: '袖型',
              value: '常规袖'
            },{
              key: '上衣厚度',
              value: '适中'
            }]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: "* 以上尺寸为实物人工测量，因测量但是不同，会有1-2cm误差",
            key: "尺码说明",
            tables: [[
              ['尺码', 'M', 'L', 'XL', 'XXL'],
              ['衣长', '61.5', '63', '64.5', '66'],
              ['胸围', '98', '104', '110', '116'],
              ['袖长', '63', '66', '68.5', '70.5'],
            ]]
          }
        },
        rate: {
          Crate: 1,
          list: [{
            created: 1535804719,
            user: {
              avatar: require('../../assets/server/imgs/detail/commentinfo/profile.jpg'),
              uname: 'acedar'
            },
            content: '很好，很nice',
            style: 'M 白色',
            images: [
              require('../../assets/server/imgs/detail/commentinfo/mountain-5795883__340.webp'),
            ]
          }]
        }
      }
    },
    4: {
      result: {
        columns: [
          '销量 5600',
          '收藏 560',
          '默认快递',
        ],
        shopInfo: {
          shopLogo: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          name: "新百伦",
          cFans: 560,
          cSells: 20001,
          score: [
            {
              isBetter: false,
              name: "商品相符",
              score: 4.64
            }, {
              isBetter: true,
              name: "价格合理",
              score: 5
            }, {
              isBetter: true,
              name: "质量满意",
              score: 4.8
            }
          ],
          cGoods: 1600,
          services: [{
            name: '7天无理由退货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          },{
            name: '全国包邮',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }]
        },
        itemInfo: {
          desc: '新款上市',
          discountDesc: '活动价',
          price: '￥460.0',
          oldPrice: '￥660.0',
          readPrice: '200',
          title: "【新百伦】2021年春季新款长袖T恤学生韩版复古白色青春靓丽款",
          topImages: [
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp'),
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp')
          ]
        },
        detailInfo: {
          desc: '新款上市',
          detailImage: [{
            key: '穿着效果',
            desc: '',
            list: [
              require('../../assets/server/imgs/detail/detailinfo/woman-5665943__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5828786__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5978200__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-6010056__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/world-trade-center-5889199__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/yoga-5281457__340.webp')
            ]
          }]
        },
        itemParams: {
          info: {
            anchor: 'prodcut_info',
            key: '产品参数',
            set: [{
              key: '图案',
              value: '宫廷复古图/民族复古图， 字母/文字/数字'
            },{
              key: '厂名',
              value: 'acedar'
            },{
              key: '颜色',
              value: '黑白凭拼接'
            },{
              key: '袖型',
              value: '常规袖'
            },{
              key: '上衣厚度',
              value: '适中'
            }]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: "* 以上尺寸为实物人工测量，因测量但是不同，会有1-2cm误差",
            key: "尺码说明",
            tables: [[
              ['尺码', 'M', 'L', 'XL', 'XXL'],
              ['衣长', '61.5', '63', '64.5', '66'],
              ['胸围', '98', '104', '110', '116'],
              ['袖长', '63', '66', '68.5', '70.5'],
            ]]
          }
        },
        rate: {
          Crate: 1,
          list: [{
            created: 1535694719,
            user: {
              avatar: require('../../assets/server/imgs/detail/commentinfo/profile.jpg'),
              uname: 'acedar'
            },
            content: '很好，很nice',
            style: 'M 白色',
            images: [
              require('../../assets/server/imgs/detail/commentinfo/mountain-5795883__340.webp'),
            ]
          }]
        }
      }
    },
    5: {
      result: {
        columns: [
          '销量 456',
          '收藏 582',
          '默认快递',
        ],
        shopInfo: {
          shopLogo: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          name: "鸿星尔克",
          cFans: 5654,
          cSells: 21200,
          score: [
            {
              isBetter: false,
              name: "商品相符",
              score: 4.64
            }, {
              isBetter: true,
              name: "价格合理",
              score: 5
            }, {
              isBetter: true,
              name: "质量满意",
              score: 4.8
            }
          ],
          cGoods: 1500,
          services: [{
            name: '72小时发货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }, {
            name: '7天无理由退货',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          },{
            name: '全国包邮',
            icon: require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
          }]
        },
        itemInfo: {
          desc: '新款上市',
          discountDesc: '活动价',
          price: '￥1356',
          oldPrice: '￥1256.0',
          readPrice: '100.0',
          title: "【鸿星尔克】2021年春季新款长袖T恤学生韩版复古白色青春靓丽款",
          topImages: [
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp'),
            require('../../assets/server/imgs/detail/swiper/boat-5000655__340.webp'),
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp')
          ]
        },
        detailInfo: {
          desc: '新款上市',
          detailImage: [{
            key: '穿着效果',
            desc: '',
            list: [
              require('../../assets/server/imgs/detail/detailinfo/woman-5665943__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5828786__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-5978200__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/woman-6010056__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/world-trade-center-5889199__340.webp'),
              require('../../assets/server/imgs/detail/detailinfo/yoga-5281457__340.webp')
            ]
          }]
        },
        itemParams: {
          info: {
            anchor: 'prodcut_info',
            key: '产品参数',
            set: [{
              key: '图案',
              value: '宫廷复古图/民族复古图， 字母/文字/数字'
            },{
              key: '厂名',
              value: 'acedar'
            },{
              key: '颜色',
              value: '黑白凭拼接'
            },{
              key: '袖型',
              value: '常规袖'
            },{
              key: '上衣厚度',
              value: '适中'
            }]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: "* 以上尺寸为实物人工测量，因测量但是不同，会有1-2cm误差",
            key: "尺码说明",
            tables: [[
              ['尺码', 'M', 'L', 'XL', 'XXL'],
              ['衣长', '61.5', '63', '64.5', '66'],
              ['胸围', '98', '104', '110', '116'],
              ['袖长', '63', '66', '68.5', '70.5'],
            ]]
          }
        },
        rate: {
          Crate: 1,
          list: [{
            created: 1535804719,
            user: {
              avatar: require('../../assets/server/imgs/detail/commentinfo/profile.jpg'),
              uname: 'acedar'
            },
            content: '很好，很nice',
            style: 'M 白色',
            images: [
              require('../../assets/server/imgs/detail/commentinfo/mountain-5795883__340.webp'),
            ]
          }]
        }
      }
    }
  }
  return DetailSwiperData[int_id.toString()]
}

export function getRecommendDataDemo() {
  return {
    data: {
      list: [{
        iid: '1',
        cfav: 10000,
        discount: 700,
        price: '84.29',
        discountPrice: '59',
        title: '夏季新款',
        image: require('../../assets/server/imgs/detail/recommend/beach-5064674__340.webp'),
     }, {
        iid: '2',
        cfav: 10000,
        discount: 700,
        price: '84.29',
        discountPrice: '59',
        title: '夏季新款',
        image: require('../../assets/server/imgs/detail/recommend/couple-3467634__340.webp'),
      }, {
        iid: '3',
        cfav: 10000,
        discount: 700,
        price: '84.29',
        discountPrice: '59',
        title: '夏季新款',
        image: require('../../assets/server/imgs/detail/recommend/cute-4436103__340.webp'),
      }, {
        iid: '4',
        cfav: 10000,
        discount: 700,
        price: '84.29',
        discountPrice: '59',
        title: '夏季新款',
        image: require('../../assets/server/imgs/detail/recommend/field-5430070__340.jpg'),
      }]
    }
  }
}
