import React,{useEffect,useState} from 'react';
import {request,getCurrentInstance} from '@tarojs/taro';
import { AtCard } from "taro-ui"
import moment from 'moment'
import _ from 'lodash'
// import Towxml  from 'towxml'
import { View,} from '@tarojs/components'
import './index.scss'
import {twosum,link,comments} from './data'

// const towxml = new Towxml()
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
  const {created_at,title,body}=dataList
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
         <AtCard
          note='小Tips'
          extra={created_at}
          title={title}
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          <wemark md={body} link highlight type='wemark' />
        </AtCard>
    </View>


  )
}

export default Mine;
