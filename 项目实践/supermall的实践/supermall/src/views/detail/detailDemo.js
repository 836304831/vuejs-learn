
export function getDetailDataDemo(iid) {
  const int_id = parseInt(iid) % 6
  const DetailSwiperData = {
    0: {
      result: {
        itemInfo: {
          topImages: [
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp'),
            require('../../assets/server/imgs/detail/swiper/boat-5000655__340.webp'),
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp'),
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp')
          ]
        }
      }
    },
    1: {
      result: {
        itemInfo: {
          topImages: [
            require('../../assets/server/imgs/detail/swiper/boat-5000655__340.webp'),
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp')
          ]
        }
      }
    },
    2: {
      result: {
        itemInfo: {
          topImages: [
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp')

          ]
        }
      }
    },
    3: {
      result: {
        itemInfo: {
          topImages: [
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp'),
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp')
          ]
        }
      }
    },
    4: {
      result: {
        itemInfo: {
          topImages: [
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp'),
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp')
          ]
        }
      }
    },
    5: {
      result: {
        itemInfo: {
          topImages: [
            require('../../assets/server/imgs/detail/swiper/woman-6010056__340.webp'),
            require('../../assets/server/imgs/detail/swiper/yoga-5281457__340.webp'),
            require('../../assets/server/imgs/detail/swiper/boat-5000655__340.webp'),
            require('../../assets/server/imgs/detail/swiper/book-5953965__340.webp'),
            require('../../assets/server/imgs/detail/swiper/chapel-5878656__340.webp'),
            require('../../assets/server/imgs/detail/swiper/child-5943325__340.webp')
          ]
        }
      }
    }
  }
  return DetailSwiperData[int_id.toString()]
}
