import {userApi }from '@/services'
import {setStorage} from '@tarojs/taro'

export default {
    namespace:'user',
    state:{
        userInfo:{},
    },
    effects:{
      *login(_,{call,put,select}){
          const res = yield call(userApi.login,_.payload.userInfo)
          if(!res) return
          setStorage({
            key:'userInfo',
            data:res
          })
          yield put({
            type:'save',
            payload:{
              userInfo: res
            }
        })
      },
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
