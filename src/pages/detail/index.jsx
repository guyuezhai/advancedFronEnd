import React,{useEffect,useState} from 'react';
import {getCurrentInstance} from '@tarojs/taro';
import { AtCard,AtAvatar} from "taro-ui"
import moment from 'moment'
import 'moment/locale/zh-cn'
import _ from 'lodash'
import {useSelector,useDispatch} from 'react-redux'
// import Towxml  from 'towxml'
import { View,Text} from '@tarojs/components'
import './index.scss'

moment.locale('zh-cn')

// const towxml = new Towxml()
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
          note={!_.isEmpty(theIssues) && moment(new Date(theIssues.created_at)).format('LLL')}
          title={theIssues?.user?.login}
          thumb={theIssues?.user?.avatar_url}
          className="comment-card"
        >
          {/* <wemark md={`${theIssues?.title} \r\n ---`} link highlight type='wemark' /> */}
          <Text className='detail-title'>{theIssues?.title}</Text>
          <wemark md={theIssues?.body} link highlight type='wemark' />
        </AtCard>
        {
          _.map(comments,(o)=>{

            let {body,user:{avatar_url,login}}=o;
            return <AtCard
            note={moment(new Date(o.created_at)).format('LLL')}
            title={login}
            thumb={avatar_url}
            className="comment-card"
          >
            <wemark md={body} link highlight type='wemark' />
          </AtCard>
          })
        }
    </View>


  )
}


export default Detail;
