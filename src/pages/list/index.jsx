import React,{useEffect,useState} from 'react';
import {request,navigateTo,getCurrentInstance} from '@tarojs/taro';
import _ from 'lodash'
import { View,} from '@tarojs/components'
import {api ,header}from '../../api'
import Panel from '../panel'
import './index.scss'
import data from './data'
function Mine() {
  const [dataList, setDataList] = useState(data)
  const [info, setInfo] = useState(()=>{
    return getCurrentInstance().router.params
  })
  useEffect(() => {
    let url=`${api.issues}`
    if(info){
      url=`${url}?labels=${info.labels}`
    }
    request({
      url,
      header,
      success: function (res) {
        console.log(res.data)
        setDataList(res.data)
      }
    })
  }, [info])

  return (
    <View>
      {
        _.map(dataList,(o,i)=>{
          return (
          <Panel
            data={o}
            index={i+1}
          >
          </Panel>
          )
        })
      }
    </View>

  )
}
export default Mine;
