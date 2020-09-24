import React,{useEffect,useState} from 'react';
import {cloud,getEnv,ENV_TYPE,getStorage} from '@tarojs/taro';
import { View, } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import {useSelector,useDispatch} from 'react-redux'
import LoginButton from '@/components/LoginButton'
import {isEmpty} from 'lodash'
import './index.scss'

function Mine() {
  const userInfo = useSelector(state => state.user.userInfo)
  const dispatch = useDispatch()
  const isLogin= (!userInfo || isEmpty(userInfo))?false:true;
  useEffect(() => {
    const WeappEnv = getEnv() === ENV_TYPE.WEAPP;
    if(WeappEnv){ //微信小程序环境
      cloud.init() //云函数初始化
    }
    async function getUserInfo() {
      try {
        const {data}= await getStorage({key:'userInfo'})
        dispatch({
          type:'user/saveUserInfo',
          payload:{
            userInfo:data
          }
        })

      } catch (error) {
        console.log('获取失败：---',error)
      }

    }
    if(!isLogin){
      getUserInfo()
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
          `欢迎${genderArr[gender]?genderArr[gender]:''}加入前端修仙之路！`
        }</View>
        {
          isLogin?'':(<LoginButton></LoginButton>)
        }
    </View>

    </View>
  )
}

export default Mine;
