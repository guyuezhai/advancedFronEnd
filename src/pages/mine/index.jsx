import React,{useEffect,useState} from 'react';
import {request,navigateTo} from '@tarojs/taro';
import _ from 'lodash'
import { View,} from '@tarojs/components'
import Panel from '../../components/Panel'
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

  return (
    <View>
      {
        _.map(dataList,(o,i)=>{
          return (
          <Panel
            data={o}
            index={i+1}
          >
            <wemark md={o.body} link highlight type='wemark' />
          </Panel>
          )
        })
      }
    </View>

  )
}
Mine.config={
  navigationBarTitleText: '习题列表',
  usingComponents:{
    wemark:'../../wemark/wemark'
  }
}
export default Mine;
