import React,{useState} from 'react'
import { Button,} from "@tarojs/components";
import {useDispatch} from 'react-redux'
import  "./index.scss";

function LoginButton(props){
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()

  async function onGetUserInfo(e) {
    setIsLogin(true)
    const { avatarUrl, nickName } = e.detail.userInfo
    const userInfo = { avatar: avatarUrl, nickName }
    dispatch({
      type:'user/login',
      payload:{
        userInfo
      }
    })
    setIsLogin(false)
  }

  return(
    <Button
      openType="getUserInfo"
      onGetUserInfo={onGetUserInfo}
      type='primary'
      className='login-button'
      loading={isLogin}
    >
      授权登录
    </Button>
  )
}

export default LoginButton
