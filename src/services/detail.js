
import request from '@/utils/request'
import {api} from '@/utils/api'
const getIssues = ({num})=>{
  return request({
    url: `${api.issues}/${num}`,
    method:'get'
  })
}
const getComments = ({num})=>{
  return request({
    url: `${api.issues}/${num}/comments`,
    method:'get',
  })
}

export {
  getIssues,
  getComments
}
