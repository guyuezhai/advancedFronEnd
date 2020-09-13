import React,{useEffect,useState} from 'react';
import {request,getCurrentInstance} from '@tarojs/taro';
import { AtCard,AtAvatar} from "taro-ui"
import moment from 'moment'
import _ from 'lodash'
// import Towxml  from 'towxml'
import { View,} from '@tarojs/components'
import api from '../../api'
import './index.scss'
import {twosum,link,comments} from './data'

// const towxml = new Towxml()
function Mine() {
  const [data, setData] = useState(twosum)
  const [commentsDatas, setCommentsDatas] = useState(comments)
  const [info, setInfo] = useState(()=>{
    return getCurrentInstance().router.params
  })
  console.log('info----',info)
  //获取issues数据
  useEffect(() => {
    if(info.num!==undefined){

      request({
        url: `${api.issues}/${info.num}`,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          setData(res.data)
        }
      })

      request({
        url: `${api.issues}/${info.num}/comments`,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          setCommentsDatas(res.data)
        }
      })
    }

  }, [info])

  const {created_at,title,body,user:{avatar_url,login}}=data
  return (
    <View>
         <AtCard
          note={created_at}
          title={login}
          thumb={avatar_url}
          className="comment-card"
        >
          <wemark md={`**${title}** \r\n ---`} link highlight type='wemark' />
          <wemark md={body} link highlight type='wemark' />
        </AtCard>
        {
          _.map(commentsDatas,(o)=>{

            let {body,user:{avatar_url,login}}=o;
            return <AtCard
            note={created_at}
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


export default Mine;
