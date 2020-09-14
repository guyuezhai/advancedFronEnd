import React, { Component,useEffect,useState,useMemo} from 'react'
import {request,navigateTo,} from '@tarojs/taro';
import { View, Text ,Swiper, SwiperItem ,Image} from '@tarojs/components'
import { AtButton,AtGrid,AtToast} from 'taro-ui'
import _ from 'lodash'
import labels from './data'
import api from '../../api'
import './index.scss'
const labelImgMap={
  react:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',

}
function Index(){
  const [labelList, setLabelList] = useState(labels)
  const [isOpened, setIsOpened] = useState(false)
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
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value:o.name
      }
    })
  }, [labelList])
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
      <AtGrid columnNum={4}	 data={data} onClick={goToDetail}/>
    </View>

  )
}
export default  Index
