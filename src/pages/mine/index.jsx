import React,{useEffect,useState} from 'react';
import {cloud,getEnv,ENV_TYPE,getStorage,getWeRunData} from '@tarojs/taro';
import { View, } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import {useSelector,useDispatch} from 'react-redux'
import  echarts from "@/components/ec-canvas/echarts";
import LoginButton from '@/components/LoginButton';
import {isEmpty,forEach} from 'lodash';
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.scss'

let chart = null;
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  return chart;
}

function Mine() {
  const {userInfo,runData}= useSelector(state => state.user)
  const [ec, setEc] = useState({
      onInit: initChart
  })
  const dispatch = useDispatch()
  // const {weRunData:{data:{stepInfoList}}}=runData
  const runSteps=runData?.weRunData?.data?.stepInfoList
  console.log('userInfo--runData:',runSteps)
  const isLogin= (!userInfo || isEmpty(userInfo))?false:true;
  useEffect(() => {
    const WeappEnv = getEnv() === ENV_TYPE.WEAPP;
    if(WeappEnv){ //微信小程序环境
      cloud.init() //云函数初始化
    }

    getWeRunData({
      success (res) {
        // 或拿 cloudID 通过云调用直接获取开放数据
        const cloudID = res.cloudID;
        if(cloudID){
          dispatch({
            type:'user/getRunData',
            payload:{
              cloudID
            }
          })
        }
      }
    })
    async function getUserInfo() {
      try {
        const {data}= await getStorage({key:'userInfo'})
        dispatch({
          type:'user/saveUserInfo',
          payload:{
            userInfo:data
          }
        })

      } catch (error) {
        console.log('获取失败：---',error)
      }

    }

    if(!isLogin){
      getUserInfo()
    }
  }, [])


  useEffect(() => {
    if(runSteps){

      let ydata=[],xdata=[];
      forEach(runSteps,(item)=>{
        let {step, timestamp}=item
        let time=moment(new Date(timestamp*1000)).format('MM-DD')
        ydata.push(step);
        xdata.push(time)
      })
      var option = {
        title: {
            text: '您近一个月的运动数据',
            // subtext: '数据来自微信运动'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xdata
        },
        yAxis: {
            // type: 'category',
            // data: ydata
        },
        series: [
            {
                // name: '2011年',
                type: 'bar',
                data: ydata
            },
        ]
    };

      chart.setOption(option);
    }
  }, [runSteps])
  const {gender,nickName,avatar}=userInfo
  const genderArr=[nickName,"小哥哥","小姐姐"]
  return (
    <View className='user'>
      <View className='user-center'>
        <AtAvatar circle image={avatar}></AtAvatar>
        <br/>
        <View className='name'>{nickName}</View>
        <View className='tip'>{
          `欢迎${genderArr[gender]?genderArr[gender]:''}加入前端修仙之路！`
        }</View>

        {
          isLogin?'':(<LoginButton></LoginButton>)
        }
    </View>
    <view class="mychart-con">
          <ec-canvas
            force-use-old-canvas="true"
            id='mychart-dom-area'
            canvas-id='mychart-area'
            ec={ec}
          ></ec-canvas>
        </view>
    </View>
  )
}

export default Mine;
