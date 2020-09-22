
import {cloud,getEnv,ENV_TYPE,} from '@tarojs/taro';

async function login(userInfo){
  const isWeapp = getEnv() === ENV_TYPE.WEAPP
  try {
    if(isWeapp){
      const {result}=await cloud.callFunction({
        name:'login',
        data:{
          userInfo
        }
      })
      return result.user
    }
  } catch (error) {
    console.error('login ERR: ', error)
    return {}
  }

}

export {
  login
}
