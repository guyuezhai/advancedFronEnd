import {detailApi }from '@/services'

export default {
    namespace:'detail',
    state:{
        theIssues:{},
        comments:[]
    },
    effects:{
      *getIssues(_,{call,put,select}){
          const res = yield call(detailApi.getIssues,_.payload)
          if(!res) return
          yield put({
            type:'save',
            payload:{
              theIssues: res
            }
        })
      },
      *getComments(_,{call,put,select}){
        const res = yield call(detailApi.getComments,_.payload)
        if(!res) return
        yield put({
          type:'save',
          payload:{
            comments: res
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
