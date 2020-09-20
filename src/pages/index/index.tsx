import React, { Component,useEffect,useState,useMemo} from 'react'
import {navigateTo,} from '@tarojs/taro';
import { View, Text ,Swiper, SwiperItem ,Image} from '@tarojs/components'
import { AtGrid,AtToast} from 'taro-ui'
import _ from 'lodash'
import { connect } from 'react-redux';
import * as images from '@/images'
import './index.scss'
function Index({dispatch,home}){
  const [isOpened, setIsOpened] = useState(false)
  useEffect(() => {
      dispatch({
        type: 'home/getLabels',
      });
  }, [])
  const goToDetail=(item,index)=>{
    let {value}=item
    navigateTo({
      url: `/pages/list/index?labels=${value}`
    })
  }
  const data=useMemo(() => {
    return _.map(home.labels,(o)=>{
      let {name}=o
      return{
        image: images[name],
        value:name
      }
    })
  }, [home.labels])
  return (
    <View>
      <AtToast isOpened={isOpened} text="后续开发中，敬请期待！" icon="loading-2"></AtToast>
      <Swiper
        className='swiper-container'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        onClick={()=>setIsOpened(true)}
        indicatorDots
        autoplay>
          <SwiperItem>
            <View className='swiper'>
              <Image className='swiper-image' src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/584858b7a7ad4e9daba4d5c900aee2bc~tplv-k3u1fbpfcp-zoom-1.image"></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper'>
            <Image className='swiper-image' src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f929d78700014bf19c35afb6cc769d2b~tplv-k3u1fbpfcp-zoom-1.image"></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper'>
            <Image className='swiper-image' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3378498490,2105022646&fm=26&gp=0.jpg"></Image>
            </View>
        </SwiperItem>
        </Swiper>
      <AtGrid columnNum={3}	 data={data} onClick={goToDetail}/>
    </View>

  )
}
export default  connect(({home})=>({home}))(Index)

