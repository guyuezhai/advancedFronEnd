import React,{useEffect,useState} from 'react';
import {request,navigateTo} from '@tarojs/taro';
import _ from 'lodash'
import { View,} from '@tarojs/components'
import './index.scss'
import data from './data'
function Mine() {
  const [dataList, setDataList] = useState(data)
  // useEffect(() => {
  //   request({
  //     url: 'https://api.github.com/repos/guyuezhai/interviewSummary/issues',
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data)
  //       setDataList(res.data)
  //     }
  //   })
  // }, [])
  const goToDetail=(num)=>{
    navigateTo({
      url: `/pages/detail/index?num=${num}`
    })
  }
  return (
    <View>
      {
        _.map(dataList,(o)=>{
          let {number,title}=o
          return (
          <View className="list_item" onClick={()=>goToDetail(number)}> #{number} {title}</View>
          )
        })
      }
    </View>

  )
}

export default Mine;
