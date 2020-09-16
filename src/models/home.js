// import * as homeApi from './server'

export default {
    namespace:'home',
    state:{
        amount:0,
    },
    effects:{
        *handleAddNumber(_,{call,put,select}){
          const { amount } = yield select( state => state.home )
          // const res = yield call(homeApi.optionAllow,{status:'add'})
          //     if(!res.data) return
          //     yield put({
          //         type:'save',
          //         payload:{
          //             amount: amount + 1
          //         }
          //     })
		    }
    },

    reducers:{
        save(state, { payload }){
            return { ...state, ...payload }
        }
    }
}
