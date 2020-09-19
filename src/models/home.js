import {homeApi }from '@/services'

export default {
    namespace:'home',
    state:{
        labels:[]
    },
    effects:{
        *handleAddNumber(_,{call,put,select}){
          const { amount } = yield select( state => {
            console.log('select---',select,"home---",state,_)
            return state.home
          })
          // const res = yield call(homeApi.optionAllow,{status:'add'})
              // if(!res.data) return
              yield put({
                  type:'save',
                  payload:{
                      amount: amount + 1
                  }
              })
        },
        *getLabels(_,{call,put,select}){
          const res = yield call(homeApi.getLabels)
          if(!res) return
          yield put({
            type:'save',
            payload:{
              labels: res
            }
        })
        }
    },

    reducers:{
        save(state, { payload }){
            return { ...state, ...payload }
        }
    }
}
