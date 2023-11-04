module.exports = () => {
    return async (ctx, next) => {
        // 初始化参数
        ctx.state.scope = {
            requestId: '1'
        }
        await next()
    }
}