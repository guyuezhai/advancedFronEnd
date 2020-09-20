import React, { Component,useEffect,useState,useMemo} from 'react'
import {navigateTo,} from '@tarojs/taro';
import { View, } from '@tarojs/components'
import { AtButton,AtGrid,AtToast,AtTimeline} from 'taro-ui'
import { connect } from 'react-redux';
import TimeLine from '@/components/TimeLine';
import _ from 'lodash'
import './index.scss'

function Depos({home}){
  const {labels}=home
  useEffect(() => {

  }, [])
  const goToDetail=(value)=>{
    navigateTo({
      url: `/pages/list/index?labels=${value}`
    })
  }
  const data=useMemo(() => {
    return _.map(labels,(o)=>{
      let {name,color}=o
      return {
        title: name,
        // content: ['大概8:00'],
        color:`#${color}`,
        icon: 'check-circle',
        extra:'查看',
        onClick:()=>{console.log('item',name)}
      }
    })
  }, [labels])
  return (
    <View className='depo'>
      <TimeLine
        pending
        className={'altime'}
        items={data}
        onClick={(value)=>goToDetail(value)}
      >
      </TimeLine>
    </View>

  )
}
export default  connect(({
  home
})=>({
  home
}))(Depos)
