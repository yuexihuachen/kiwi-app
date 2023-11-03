const Koa = require('koa');

const middlewares = require("./middleware/index")

const app = new Koa();


middlewares(app)


app.listen(3000);