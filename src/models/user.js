import {userApi }from '@/services'
import {setStorage} from '@tarojs/taro'

export default {
    namespace:'user',
    state:{
        userInfo:{},
        runData:{},
    },
    effects:{
      *login(_,{call,put,select}){
          const res = yield call(userApi.login,_.payload.userInfo)
          if(!res) return
          yield put({
            type:'save',
            payload:{
              userInfo: res
            }
          })
          setStorage({
            key:'userInfo',
            data:res
          })
      },
      *getRunData(_,{call,put}){
        const res = yield call(userApi.getRunData,_.payload.cloudID)
          if(!res) return
          yield put({
            type:'save',
            payload:{
              runData: res
            }
          })
      }
    },

    reducers:{
        save(state, { payload }){
            return { ...state, ...payload }
        },
        saveUserInfo(state,{payload}){
          return { ...state, ...payload }
        }
    }
}
