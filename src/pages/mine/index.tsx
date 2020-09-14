import React,{useEffect,useState} from 'react';
import {getUserInfo,getWeRunData} from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'
function Post() {
  const [user, setUser] = useState({})
  useEffect(() => {
    getUserInfo({
      success: function(res) {
        setUser(res.userInfo)
      }
    })
    getWeRunData({
      success: function(res) {
        const encryptedData = res.encryptedData
        // 或拿 cloudID 通过云调用直接获取开放数据
        const cloudID = res.cloudID
        console.log(res)
      }
    })
  }, [])
  const {gender,nickName,avatarUrl}=user
  const genderArr=[nickName,"小哥哥","小姐姐"]
  return (
    <View className='user'>
      <View className='user-center'>
        <AtAvatar circle image={avatarUrl}></AtAvatar>
        <br/>
        <View className='name'>{nickName}</View>
        <View className='tip'>{
          `欢迎${genderArr[gender]}加入前端修仙之路！`
        }</View>
    </View>

    </View>
  )
}

export default Post;
