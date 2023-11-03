const helmet = require('koa-helmet')
/**
 * koa-helmet
 * 通过设置 Http 头来使应用程序更加安全，避免常见的漏洞攻击 csrf xss
 * https://cdn.jsdelivr.net/gh/yuexihuachen/CDN/renderTree.png
 */
module.exports = () => {
  return helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "cdn.jsdelivr.net"],
      },
    },
  })
}