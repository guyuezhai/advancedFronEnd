import {listApi }from '@/services'

export default {
    namespace:'list',
    state:{
        labelIssues:[],
        issuesList:[],
        loading:true,
    },
    effects:{
      *getIssuesList(_,{call,put,select}){
          const res = yield call(listApi.getIssuesList)
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
              issuesList: res,
              loading:false
            }
        })
      },
      *getLabelIssues(_,{call,put,select}){
        const res = yield call(listApi.getLabelIssues,_.payload)
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
            labelIssues: res,
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
