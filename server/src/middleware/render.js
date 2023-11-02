const minify = require('html-minifier').minify;
const nunjucks = require("nunjucks");
const path = require("path");
const { reduce } = require('../routes');

const ext = '.html';
const controllerCache = new Map()
const findController = (rootControllerPath, controllerPath) => {
    return new Promise((resolve, reject) => {
        const controllerArray = controllerPath.split('.');
        const controllerName = controllerArray[0]
        const controllerFilePath = path.join(rootControllerPath, controllerName)
        const controller = require(controllerFilePath)
        const action = controller[controllerArray[1]]
        let data = {}
        if (action) {
            data = {
                action,
                controllerName
            }
            controllerCache.set(controllerPath, data)
            resolve(data)
        } else {
            reject('controller action path not found')
        }
    })
}
const getController = (rootControllerPath, controllerPath) => {
    if (controllerCache.has(controllerPath)) {
        return Promise.resolve(controllerCache.get(controllerPath))
    }
    return findController(rootControllerPath, controllerPath)
}

module.exports = (options = {}) => {
    const {
        rootControllerPath, 
        viewRootPath, 
        renderConfig, 
        envConfig, 
        minifyConfig
    } = options
    const defaultViews = (viewRootPath, renderConfig, envConfig = {}) => {
        const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(viewRootPath,renderConfig), envConfig)
        return (viewName, data) => {
            return new Promise((resolve, reject) => {
                env.render(`${viewName}${ext}`, data,  function(err, res) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                })
            })
        }
    }

    const render = defaultViews(viewRootPath, renderConfig);

    // const renderString = (viewPath, ctx, data) => {
    //     return render(path.join(this.state.controller, viewPath), data).then(html => {
    //         return minify(html)
    //     })
    // }

    const renderView = function(viewPath) {
        return render(path.join(this.state.controller, viewPath), this.state.scope).then(html => {
            this.body = html
            this.state.scope = null
        })
    }

    return (ctx, next) => {
        Object.defineProperties(ctx, {
            render: {
                get() {
                    return renderView.bind(ctx)
                }
            }
        })

        return next().then(() => {
            if (ctx.routerItem && ctx.routerItem.length) {
                const controllerPath = ctx.routerItem[0].data.controller
                return getController(rootControllerPath, controllerPath).then(data => {
                    const {
                        action,
                        controllerName
                    } = data;
                    ctx.state.controller = controllerName
                    return action.bind(ctx)(ctx.state.scope)
                })
            }
        })
    }
}