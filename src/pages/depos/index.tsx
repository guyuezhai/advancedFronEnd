import React, { useMemo} from 'react'
import {navigateTo,} from '@tarojs/taro';
import { View, } from '@tarojs/components'
import { useSelector } from 'react-redux';
import TimeLine from '@/components/TimeLine';
import {map} from 'lodash'
import './index.scss'

function Depos(){
  const {labels}= useSelector(state => state.home)

  const goToDetail=(value)=>{
    navigateTo({
      url: `/packageA/pages/list/index?labels=${value}`
    })
  }
  const data=useMemo(() => {
    return map(labels,(o)=>{
      let {name,color}=o
      return {
        title: name,
        content: ['共n题'],
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
export default  Depos
