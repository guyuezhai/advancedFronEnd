
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

async function getRunData(cloudID) {
  const isWeapp = getEnv() === ENV_TYPE.WEAPP
  try {
    if(isWeapp){
      const {result}=await cloud.callFunction({
        name:'runinfo',
        data:{
          weRunData: cloud.CloudID(cloudID), // 这个 CloudID 值到云函数端会被替换
          obj: {
            shareInfo: cloud.CloudID(cloudID), // 非顶层字段的 CloudID 不会被替换，会原样字符串展示
          }
        }
      })
      return result.event
    }
  } catch (error) {
    console.error('login ERR: ', error)
    return {}
  }

}
export {
  login,
  getRunData
}
