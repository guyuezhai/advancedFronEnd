import React,{useEffect,useState} from 'react';
import {cloud,getEnv,ENV_TYPE,getStorage,getWeRunData} from '@tarojs/taro';
import { View, } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import {useSelector,useDispatch} from 'react-redux'
import LoginButton from '@/components/LoginButton'
import {isEmpty} from 'lodash'
import './index.scss'

function Mine() {
  const {userInfo,runData}= useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log('userInfo--runData:',runData)
  const isLogin= (!userInfo || isEmpty(userInfo))?false:true;
  useEffect(() => {
    const WeappEnv = getEnv() === ENV_TYPE.WEAPP;
    if(WeappEnv){ //微信小程序环境
      cloud.init() //云函数初始化
    }

    getWeRunData({
      success (res) {
        // 拿 encryptedData 到开发者后台解密开放数据
        const encryptedData = res.encryptedData
        // 或拿 cloudID 通过云调用直接获取开放数据
        const cloudID = res.cloudID
        if(cloudID){
          dispatch({
            type:'user/getRunData',
            payload:{
              cloudID
            }
          })
        }
      }
    })
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
