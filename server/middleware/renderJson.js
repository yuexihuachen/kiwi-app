module.exports = () => {
    return async (ctx, next) => {
        ctx.renderJSON = ctx.renderJson = async (data) => {
            ctx.set('Content-Type', 'application/json')
            ctx.body = JSON.stringify(data)
        }
    
        await next()
    }
} 

