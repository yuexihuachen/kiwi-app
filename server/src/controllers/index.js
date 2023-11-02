module.exports = {
    index: async function(scope) {
        const ctx = this;
        await ctx.render('index')
    }
}