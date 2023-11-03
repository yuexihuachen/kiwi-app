const { bodyParser } = require("@koa/bodyparser");
/**
 * 请求头解析
 * json and form 文件大小100m
 * 不支持多文件上传
 */

module.exports = () => {
  return bodyParser({
    jsonLimit: '100mb',
    multipart: false,
    formidable: {
      maxFieldsSize: 100 * 1024 * 1024
    }
  })
}