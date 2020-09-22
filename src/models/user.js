import {userApi }from '@/services'

export default {
    namespace:'user',
    state:{
        userInfo:{},
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
      },
    },

    reducers:{
        save(state, { payload }){
            return { ...state, ...payload }
        }
    }
}
