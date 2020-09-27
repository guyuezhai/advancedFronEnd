
import towxml from '../towxml/index'

export const genMarkdown = (content,theme)=>{
  if(!content) return null
  return towxml(content,'markdown',{
    base:'https://xxx.com',				// 相对资源的base路径
    theme:theme?'dark':'light',					// 主题，默认`light`
    events:{					// 为元素绑定的事件方法
      tap:(e)=>{
        console.log('tap',e);
      }
    }
  })
}

