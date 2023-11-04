const path = require("path")
const koaRouter = require("./router")
const koaRender = require("./render")
const init = require("./init")
const koaBody = require("./bodyParser")
const compress = require("./compress")
const helmet = require("./helmet")
const log = require("./log")
const renderJson = require("./renderJson")

module.exports = (app) => {
    app.use(init());

    app.use(log())

    app.use(helmet());

    app.use(koaBody());

    app.use(compress());

    app.use(renderJson())

    app.use(koaRender({
        rootControllerPath: path.resolve(__dirname, "../controllers"),
        viewRootPath: path.resolve(__dirname, "../views")
    }))

    app.use(koaRouter(require('../routes')));

  };
  