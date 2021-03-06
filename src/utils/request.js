import Taro from '@tarojs/taro';
import {api,header,token,baseUrl, noConsole} from './api'

export default (options = { method: 'GET', data: {} }) => {

  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: {...options.data,access_tokrn:token},
    headers: header,
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,res.data);
      }
      if (data.status !== 'ok') {
        console.log('response',res)
        // Taro.showToast({
        //   title: `${res.data.error}~` || res.data.error.code,
        //   icon: 'none',
        //   mask: true,
        // });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
