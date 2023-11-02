const Router = require('@koa/router');
const koaCompose = require("koa-compose");
const debug = require("debug")('kiwi');

const router = new Router()

/**
 * 
 * @param {Array} routerConfig 
 * @param {String} 路由匹配
 * @param {String} 请求方法
 * @param {String} 控制器
 * @returns 
 */
module.exports = (routerConfig) => {
    if (routerConfig && routerConfig.length) {
        routerConfig.forEach(routerItem => {
            const { method = 'get', match, controller } = routerItem
            /**
             *     router.get('/:category/:title', function (ctx) {
             *         ctx.status = 204;
             *      });
             */
            const args = [match];
            args.push((ctx, next) => {
                debug(`route match: ${match}, route URL: ${ctx.url}`);
                ctx.routerItem = ctx.routerItem || []
                ctx.routerItem.push({
                    type: 'koa:route',
                    data: {
                        controller
                    }
                })
                debug(`result: ${ctx.routerItem}`);

                // 洋葱路由转呀转 1
                return next()
            })


            router[method].apply(router, args);
        })
    }

    return koaCompose([router.routes(),router.allowedMethods()])
}