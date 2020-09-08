import React, { Component } from 'react'
import { View,Form,Input,Textarea,Button} from "@tarojs/components";
import  "./index.scss";

export default function PostForm(props){
  const {handleSubmit,formTitle,handleTitleInput,formContent,handleContentInput}=props
  return(
    <View className="postform">
      <View>添加新的帖子</View>
      <Form onSubmit={handleSubmit}>
        <View>
          <View className="form-hint">标题</View>
          <Input className="input-title" type="text" placeholder="点击输入标题"
            value={formTitle} onInput={handleTitleInput}
          />
          <View className="form-hint"正文></View>
          <Textarea placeholder="点击输入正文" className="input-content" value={formContent}
            onInput={handleContentInput}/>
            <Button className="form-button" formType="submit" type="primary">
            提交
          </Button>
        </View>

      </Form>
    </View>
  )
}
