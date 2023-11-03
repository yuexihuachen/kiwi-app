import compress from 'koa-compress'
/**
 * 针对网络传输的数据进行压缩来提高传输速度
 * 针对html css js json文件做gzip压缩
 * 超过2k就压缩
 */

export default () => {
  return compress({
    filter (content_type) {
      const gaipFile = ['text/html','text/css','application/javascript','application/json']
      return gaipFile.includes(content_type)
    },
    threshold: 1024,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    br: false
  })
}