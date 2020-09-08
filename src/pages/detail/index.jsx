import React,{useEffect,useState} from 'react';
import {request,getCurrentInstance} from '@tarojs/taro';
import _ from 'lodash'
import { View,} from '@tarojs/components'
import './index.scss'
import {twosum,link,comments} from './data'

function Mine() {
  const [dataList, setDataList] = useState(twosum)
  const [info, setInfo] = useState(()=>{
    return getCurrentInstance().router.params
  })
  // useEffect(() => {
  //   if(info.num!==undefined){
  //     request({
  //       url: `https://api.github.com/repos/guyuezhai/interviewSummary/issues/${info.num}`,
  //       header: {
  //         'content-type': 'application/json'
  //       },
  //       success: function (res) {
  //         console.log(res.data)
  //         setDataList(res.data)
  //       }
  //     })
  //   }

  // }, [info])
  return (
    <View>
      {/* {
        _.map(dataList,(o)=>{
          let {number,title}=o
          return (
          <View className="list_item"> #{number} {title}</View>
          )
        })
      } */}
      <View>{dataList.title}</View>
      <View>{dataList.body}</View>
      详细信息
    </View>

  )
}

export default Mine;
