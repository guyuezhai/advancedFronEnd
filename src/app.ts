import { Component } from 'react'
// import dva from '@/utils/dva';
// import models from '@/models';
import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux';

// const reducers = combineReducers({
//   thread: (state = {}, action) => {
//     if (action.type === 'SET_CURRENT_THREAD') {
//       return {
//         ...state,
//         ...action.thread
//       }
//     }
//     return state
//   }
// })

// const store = createStore(reducers)

import './app.scss'
// const dvaApp = dva.createApp({
//   initialState: {},
//   models: models,
// });
// const store = dvaApp.getStore();
// console.log('dva----',dva,store)
import configStore from './store'
// const store = configStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (this.props.children
    )
  }
}

export default App
