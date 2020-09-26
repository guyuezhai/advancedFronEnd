import React,{ Component } from 'react'
import dva from '@/utils/dva';
import models from '@/models';
import { Provider } from 'react-redux'

import './app.scss'
const dvaApp = dva.createApp(
  {
    initialState: {},
    models: models
  }
);
const store = dvaApp.getStore();
console.log('store---',store)
function App(props){
  const {children}=props
  return <Provider store={store}>{children}</Provider>
}

export default App
