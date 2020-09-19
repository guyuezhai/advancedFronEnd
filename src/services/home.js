
import request from '@/utils/request'
import {api} from '@/utils/api'
const getLabels = ()=>{
  return request({
    url: api.labels,
    method:'get'
  })
}

export {
  getLabels
}
