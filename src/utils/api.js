const githubPath={
  baseUrl:'https://api.github.com/repos/guyuezhai/interviewSummary',
  labels:'/labels',
  issues:'/issues'
}
const giteePath={
  baseUrl:'https://gitee.com/api/v5/repos/GuYueFei/interviewSummary',
  labels:'/labels',
  issues:'/issues'
}
export const  baseUrl =(()=>{
  if(REPO_ADDRESS=='gitee') return giteePath.baseUrl
  return githubPath.baseUrl
})()
export const  api =(()=>{
  if(REPO_ADDRESS=='gitee') return giteePath;
  return githubPath
})()
const headerCom={
  'content-type': 'application/json',
  // 'Authorization': `token ${token}`
}

export const header =(()=>{
  if(REPO_ADDRESS=='gitee') return headerCom;
  return headerCom
})()

const github_token='85e394b92c91b95da483c6f75161107a9fd32ad0';
const gitee_token='cee6960a8c268136de4aff003690a480';
export const token =(()=>{
  if(REPO_ADDRESS=='gitee') return gitee_token;
  return github_token
})()

export const noConsole=false

