const koaStatic = require("koa-static");
const path = require("path");

/**
 * 设置可访问目录
 */
module.exports = () => {
  let opts = {}
  if (process.env && process.env.NODE_ENV === 'production') {
    opts = {maxage: 2160000000}
  }
  console.log(path.resolve(__dirname, "../../.build"))
  return koaStatic(path.resolve(__dirname, "../../.build"), opts);
};
