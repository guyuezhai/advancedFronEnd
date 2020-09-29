import {detailApi }from '@/services'

export default {
    namespace:'detail',
    state:{
        theIssues:{},
        comments:[],
        loading:false,
    },
    effects:{
      *getIssues(_,{call,put,select}){
          const res = yield call(detailApi.getIssues,_.payload)
          yield put({
            type:'save',
            payload:{
              loading:true
            }
          })
          if(!res) return
          yield put({
            type:'save',
            payload:{
              theIssues: res,
              loading:false
            }
          })
      },
      *getComments(_,{call,put,select}){
        const res = yield call(detailApi.getComments,_.payload)
        yield put({
          type:'save',
          payload:{
            loading:true
          }
        })
        if(!res) return
        yield put({
          type:'save',
          payload:{
            comments: res,
            loading:false
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
