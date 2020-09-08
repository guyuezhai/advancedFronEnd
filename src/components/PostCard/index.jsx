import React, { Component } from 'react'
import { View } from "@tarojs/components";
import  "./index.scss";

export default function PostCard(props){
  const {title,content}=props
  return(
    <View className="postcard">
      <View className="post-title">
        {title}
      </View>
      <View className="post-content">
        {content}
      </View>
    </View>
  )
}
