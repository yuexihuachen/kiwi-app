const Router = require('@koa/router');
const koaCompose = require("koa-compose");
const debug = require("debug")('kiwi');

const router = new Router()

const routePaths = []
const addRoutePath = (path) => {
    if (!routePaths.includes(path)) {
        routePaths.push(path)
    }
}

module.exports = (routerConfig) => {
    if (routerConfig && routerConfig.length) {
        routerConfig.forEach(routerItem => {
            const { method = 'get', match, controller } = routerItem
            const args = [match];
            addRoutePath(match);
            args.push((ctx, next) => {
                debug(`current path: ${match} URL: ${ctx.url}`);
                ctx.routerItem = ctx.routerItem || []
                ctx.routerItem.push({
                    type: 'koa:route',
                    data: {
                        controller
                    }
                })
                debug(`result: ${ctx.routerItem}`)
                return next()
            })


            router[method].apply(router, args);
        })
    }

    return koaCompose([router.routes(),router.allowedMethods()])
}

module.exports.routePaths = routePaths