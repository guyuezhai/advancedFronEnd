import React, { Component } from 'react'
import { View } from "@tarojs/components";
import {request,navigateTo} from '@tarojs/taro';
import _ from 'lodash'

import  "./index.scss";

function Panel(props){
  const {data:{title,number,body,labels,created_at},index,children}=props
  console.log('body--',children)
  const goToDetail=(num)=>{
    navigateTo({
      url: `/pages/detail/index?num=${num}`
    })
  }
  return(
    <View className="panel" onClick={()=>goToDetail(number)}>
      <View className="panel-title">
        {`第${index}题：${title}`}
      </View>
      <View className="panel-body">
        <wemark md={'# heading\n\nText'} link highlight type='wemark' />
      </View>
      <View className="panel-footer">
        <View className="panel-label">
          {
            _.map(labels,(o)=>{
              let {name,color,node_id}=o
            return <View className='label-item' style={{backgroundColor:"#"+color}}>{name}</View>
            })
          }
        </View>
        <View className="panel-mark">
        {created_at}
        </View>
      </View>
    </View>
  )
}

export default Panel
