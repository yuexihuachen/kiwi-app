import koaBody from 'koa-body'
/**
 * 请求头解析
 * json and form 文件大小100m
 * 不支持多文件上传
 */

export default () => {
  return koaBody({
    jsonLimit: '100mb',
    multipart: false,
    formidable: {
      maxFieldsSize: 100 * 1024 * 1024
    }
  })
}