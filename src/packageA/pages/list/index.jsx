import React,{useEffect} from 'react';
import {getCurrentInstance} from '@tarojs/taro';
import {map} from 'lodash'
import { View,} from '@tarojs/components'
import {useDispatch,useSelector} from 'react-redux'
import Panel from '../../panel'
import './index.scss'

function List() {
  const dispatch = useDispatch()
  const {labelIssues}= useSelector(state => state.list)
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
    </View>

  )
}
export default List
