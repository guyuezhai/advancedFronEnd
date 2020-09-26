import React, { useEffect,useMemo} from 'react'
import {navigateTo,} from '@tarojs/taro';
import { View, Swiper, SwiperItem ,Image} from '@tarojs/components'
import { AtGrid,} from 'taro-ui'
import {map} from 'lodash'
import { useDispatch,useSelector} from 'react-redux';
import * as images from '@/images'
import './index.scss'
function Index(){
  const dispatch = useDispatch()
  const home = useSelector(state => state.home)
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
    return map(home.labels,(o)=>{
      let {name}=o
      return{
        image: images[name],
        value:name
      }
    })
  }, [home.labels])
  return (
    <View>
      <Swiper
        className='swiper-container'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={false}
        circular
        onClick={()=>{
          navigateTo({
            url:'/pages/article/index'
          })
        }}
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
export default  Index

