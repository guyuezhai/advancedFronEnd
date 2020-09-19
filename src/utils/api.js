const api={
  labels:'https://api.github.com/repos/guyuezhai/interviewSummary/labels',
  issues:'https://api.github.com/repos/guyuezhai/interviewSummary/issues'
}
const token='85e394b92c91b95da483c6f75161107a9fd32ad0'
const header={
  'content-type': 'application/json',
  'Authorization': `token ${token}`
}
const baseUrl = '';
const noConsole=false
export {
  api,
  header,
  token,
  baseUrl,
  noConsole
}
