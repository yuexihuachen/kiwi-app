class Index {
    async index(scope) {
        const ctx = this;
        await ctx.render('index')
    }
}

module.exports = Index