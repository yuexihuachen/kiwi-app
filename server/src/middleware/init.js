module.exports = () => {
    return (ctx, next) => {
        ctx.state.scope = {
            requestId: '1'
        }
        return next()
    }
}