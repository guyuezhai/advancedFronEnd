import React,{useEffect} from 'react';
import {getCurrentInstance} from '@tarojs/taro';
import {map} from 'lodash'
import { AtToast} from "taro-ui"
import { View,} from '@tarojs/components'
import {useDispatch,useSelector} from 'react-redux'
import Panel from '../../panel'
import './index.scss'

function List() {
  const dispatch = useDispatch()
  const {labelIssues,loading}= useSelector(state => state.list)
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
  }, [info.labels])

  return (
    <View>
      {
        map(labelIssues,(o,i)=>{
          return (
          <Panel
            data={o}
            index={i+1}
          >
          </Panel>
          )
        })
      }
      <AtToast isOpened={loading} text="奋力加载中..."  status="loading"></AtToast>
    </View>

  )
}
export default List
