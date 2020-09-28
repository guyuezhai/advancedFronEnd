const config = require('../../config'),
    hljs = require('./highlight');
config.highlight.forEach(item => {
  let fun=require(`./languages/${item}`)
    hljs.registerLanguage(item, fun);
});

module.exports = hljs;
