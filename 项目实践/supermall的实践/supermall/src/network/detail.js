
import {request} from '@/network/request'


export function getDetail(iid) {
  return request(({
    url: '/detail',
    params: {
      iid
    }
  }))
}
