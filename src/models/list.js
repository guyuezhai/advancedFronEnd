import {listApi }from '@/services'

export default {
    namespace:'list',
    state:{
        labelIssues:[],
        issuesList:[]
    },
    effects:{
      *getIssuesList(_,{call,put,select}){
          const res = yield call(listApi.getIssuesList)
          if(!res) return
          yield put({
            type:'save',
            payload:{
              issuesList: res
            }
        })
      },
      *getLabelIssues(_,{call,put,select}){
        const res = yield call(listApi.getLabelIssues,_.payload)
        if(!res) return
        yield put({
          type:'save',
          payload:{
            labelIssues: res
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
