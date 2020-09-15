const api={
  labels:'https://api.github.com/repos/guyuezhai/interviewSummary/labels',
  issues:'https://api.github.com/repos/guyuezhai/interviewSummary/issues'
}
const token='29e231cbfc3241950a8f7eeb4a7ccc09083fe187'
const header={
  'content-type': 'application/json',
  'Authorization': `token ${token}`
}
export {
  api,
  header,
  token
}
