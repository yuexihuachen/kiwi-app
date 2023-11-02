const Koa = require('koa');
const path = require("path")
const koaRouter = require("./middleware/router")
const koaRender = require("./middleware/render")
const init = require("./middleware/init")

const app = new Koa();

app.use(init())

app.use(koaRender({
    rootControllerPath: path.resolve(__dirname, "./controllers"),
    viewRootPath: path.resolve(__dirname, "./views")
}))

app.use(koaRouter(require('./routes')))


app.listen(3000);