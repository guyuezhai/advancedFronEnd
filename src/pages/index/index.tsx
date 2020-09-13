import React, { Component,useEffect,useState,useMemo} from 'react'
import {request,navigateTo,} from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtButton,AtGrid  } from 'taro-ui'
import _ from 'lodash'
import labels from './data'
import api from '../../api'
import './index.scss'

function Index(){
  const [labelList, setLabelList] = useState(labels)

  useEffect(() => {
    request({
      url: api.labels,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        setLabelList(res.data)
      }
    })
  }, [])
  const goToDetail=(item,index)=>{
    let {value}=item
    navigateTo({
      url: `/pages/list/index?labels=${value}`
    })
  }
  const data=useMemo(() => {
    return _.map(labelList,(o)=>{
      return{
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value:o.name
      }
    })
  }, [labelList])
  return (
    <AtGrid data={data} onClick={goToDetail}/>
  )
}
export default  Index
