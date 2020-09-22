import React,{useEffect,useState} from 'react';
import {getUserInfo,getWeRunData,createUserInfoButton,cloud,getEnv,ENV_TYPE,} from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import {useSelector} from 'react-redux'
import LoginButton from '@/components/LoginButton'
import {isEmpty} from 'lodash'
import './index.scss'

function Post() {
  const userInfo = useSelector(state => state.user.userInfo)
  const isLogin= (!userInfo || isEmpty(userInfo))?false:true;
  useEffect(() => {
    const WeappEnv = getEnv() === ENV_TYPE.WEAPP;
    console.log('Taro.getEnv()',getEnv(),ENV_TYPE.WEAPP,WeappEnv)
    if(WeappEnv){ //微信小程序环境
      cloud.init() //云函数初始化
    }
  }, [])
  const {gender,nickName,avatar}=userInfo
  const genderArr=[nickName,"小哥哥","小姐姐"]
  return (
    <View className='user'>
      <View className='user-center'>
        <AtAvatar circle image={avatar}></AtAvatar>
        <br/>
        <View className='name'>{nickName}</View>
        <View className='tip'>{
          `欢迎${genderArr[gender]}加入前端修仙之路！`
        }</View>
        {
          isLogin?'':(<LoginButton></LoginButton>)
        }
    </View>

    </View>
  )
}

export default Post;
