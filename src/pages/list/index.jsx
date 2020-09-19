import React,{useEffect,useState,} from 'react';
import {getCurrentInstance} from '@tarojs/taro';
import _ from 'lodash'
import { View,} from '@tarojs/components'
import {connect} from 'react-redux'
import Panel from '../panel'
import './index.scss'
function List({dispatch,list}) {
  const {labelIssues}=list
  const info = getCurrentInstance().router.params
  useEffect(() => {
    if(info){
      dispatch({
        type:'list/getLabelIssues',
        payload:{
          labels:info.labels
        }
      })
    }
  }, [info])

  return (
    <View>
      {
        _.map(labelIssues,(o,i)=>{
          return (
          <Panel
            data={o}
            index={i+1}
          >
          </Panel>
          )
        })
      }
    </View>

  )
}
export default connect(({list})=>({list}))(List)
