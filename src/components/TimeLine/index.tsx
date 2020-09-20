import React from 'react'
import { View,} from "@tarojs/components";
import {AtIcon} from 'taro-ui'
import _ from 'lodash'
import  "./index.scss";

function TimeLine(props){
  const {items,onClick}=props
  return(
    <View className="time-line">
      {
        _.map(items,(o)=>{
          let {title,extra='练习',content,color,icon}=o
          return <View className="time-cell">
            <AtIcon className="time-line-icon" value={icon} color={color} size='12'></AtIcon>
            <View className="time-main" onClick={()=>onClick(title)}>
                <View className="time-title">
                  <View>{title}</View>
                  {
                    extra?(
                      <View className="time-extra" >{extra}</View>
                    ):''
                  }
                </View>
                {
                  _.map(content,(item)=>{
                    return <View className="time-content">{item}</View>
                  })
                }
              </View>
            </View>
        })
      }
    </View>
  )
}

export default TimeLine
