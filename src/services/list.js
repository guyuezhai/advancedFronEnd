
import request from '@/utils/request'
import {api} from '@/utils/api'
const getIssuesList = ()=>{
  return request({
    url: api.labels,
    method:'get'
  })
}
const getLabelIssues = (data)=>{
  return request({
    url: api.issues,
    method:'get',
    data
  })
}

export {
  getIssuesList,
  getLabelIssues
}
