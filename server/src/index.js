const Koa = require('koa');
const {
    PORT
} = require("./config");
const middlewares = require("./middleware/index")

const app = new Koa();

middlewares(app)

module.exports = app