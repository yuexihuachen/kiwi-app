const path = require("path")
const koaRouter = require("./router")
const koaRender = require("./render")
const init = require("./init")
const koaBody = require("./bodyParser")
const compress = require("./compress")
const helmet = require("./helmet")

module.exports = (app) => {
    app.use(init());

    app.use(helmet());

    app.use(koaBody());

    app.use(compress());

    

    app.use(koaRender({
        rootControllerPath: path.resolve(__dirname, "../controllers"),
        viewRootPath: path.resolve(__dirname, "../views")
    }))

    app.use(koaRouter(require('../routes')));

  };
  