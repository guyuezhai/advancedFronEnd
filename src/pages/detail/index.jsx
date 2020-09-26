import React,{useEffect,useState,useMemo} from 'react';
import {getApp, getCurrentInstance} from '@tarojs/taro';
import { AtCard,AtAvatar} from "taro-ui"
import {map,isEmpty} from 'lodash'
import {useSelector,useDispatch} from 'react-redux'
import { View,Text} from '@tarojs/components'
import './index.scss'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import {genMarkdown} from '@/utils/util'

function Detail() {
  const dispatch = useDispatch()
  const {theIssues,comments} = useSelector(state => state.detail)
  const info = getCurrentInstance().router.params

  //获取issues数据
  useEffect(() => {
    if(info.num!==undefined){
      dispatch({
        type:'detail/getIssues',
        payload:{
          num:info.num
        }
      })
      dispatch({
        type:'detail/getComments',
        payload:{
          num:info.num
        }
      })
    }
  }, [info])


  return (
    <View>
         <AtCard
          note={!isEmpty(theIssues) && moment(new Date(theIssues.created_at)).format('LLL')}
          title={theIssues?.user?.login}
          thumb={theIssues?.user?.avatar_url}
          className="comment-card"
        >
          <Text className='detail-title'>{theIssues?.title}</Text>
          <towxml nodes={genMarkdown(theIssues?.body)} />
        </AtCard>
        {
          map(comments,(o)=>{

            let {body,user:{avatar_url,login}}=o;
            return <AtCard
            note={moment(new Date(o.created_at)).format('LLL')}
            title={login}
            thumb={avatar_url}
            className="comment-card"
          >
            <wemark md={body} link highlight type='wemark' />
            <towxml nodes={genMarkdown(body)} />
          </AtCard>
          })
        }
    </View>


  )
}


export default Detail;
