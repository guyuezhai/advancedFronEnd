import React, { Component } from 'react'
import { AtIcon } from 'taro-ui'
import { View } from "@tarojs/components";
import {request,navigateTo} from '@tarojs/taro';
import {map} from 'lodash'

import  "./index.scss";

function Panel(props){
  const {data:{title,number,body,comments,labels,created_at},index,children}=props
  const goToDetail=(num)=>{
    navigateTo({
      url: `/packageA/pages/detail/index?num=${num}`
    })
  }
  return(
    <View className="panel" onClick={()=>goToDetail(number)}>
      <View className="panel-title">
        {`第${index}题：${title}`}
      </View>
      <View className="panel-body">
      </View>
      <View className="panel-footer">
        <View className="panel-label">
          {
            map(labels,(o)=>{
              let {name,color,node_id}=o
            return <View className='label-item' style={{backgroundColor:"#"+color}}>{name}</View>
            })
          }
        </View>
        <View className="panel-mark">
          <MarkItem type='eye'></MarkItem>
          <MarkItem type='star'></MarkItem>
          <MarkItem type='message' text={comments}></MarkItem>
        </View>
      </View>
    </View>
  )
}
function MarkItem(props){
  const {type,text}=props
  return (
    <View className="mark-item">
        <AtIcon className="mark-icon" value={type} size='12' color="#888"></AtIcon>
        {text}
    </View>
  )
}



export default Panel
