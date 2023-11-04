const minify = require('html-minifier').minify;
const nunjucks = require("nunjucks");
const path = require("path");


const ext = '.html';
const controllerCache = new Map()
// 获取到控制器函数
const findController = (rootControllerPath, controllerPath) => {
    return new Promise((resolve, reject) => {
        const controllerArray = controllerPath.split('.');
        const controllerName = controllerArray[0]
        const controllerFilePath = path.join(rootControllerPath, controllerName)
        const ControllerClass = require(controllerFilePath)
        const controller = new ControllerClass();
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

const defaultMinifyConfig = {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true
}

module.exports = (options = {}) => {
    const {
        rootControllerPath, 
        viewRootPath, 
        renderConfig, 
        envConfig, 
        minifyConfig = defaultMinifyConfig
    } = options
    
    // Environment 类用来管理模板
    // 实例化 Environment 时传入两个参数，一组 loaders 和配置项 opts
    const defaultViews = (viewRootPath, renderConfig, envConfig = {}) => {
        //模板的路径，opt 为一个对象，包含如下属性watch noCache
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
            this.body = minify(html, minifyConfig)
            this.state.scope = null
        })
    }

    // 洋葱路由转呀转 2
    return async (ctx, next) => {
        //作为该属性的 getter 函数。函数返回值将被用作属性的值。
        Object.defineProperties(ctx, {
            render: {
                get() {
                    return renderView.bind(ctx)
                }
            },
        })
        // 洋葱路由转呀转 3
        await next()
        if (ctx.routerItem && ctx.routerItem.length) {
            const controllerPath = ctx.routerItem[0].data.controller
            return getController(rootControllerPath, controllerPath).then(data => {
                const {
                    action,
                    controllerName
                } = data;
                ctx.state.controller = controllerName
                // 控制器函数
                return action.bind(ctx)(ctx.state.scope)
            })
        }
    }
}