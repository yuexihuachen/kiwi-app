const config = require("../config")

class Home {
    async index(scope) {
        const ctx = this;
        await ctx.renderJson({
            hello: "longwang",
            ...config
        })
    }
}

module.exports = Home