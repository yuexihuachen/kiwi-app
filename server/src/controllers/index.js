const {
    getEnv
} = require("../utils/index");

const {
    NODE_ENV = 'development'
} = getEnv()
// ['production', 'development'],
class Index {
    async index(scope) {
        const ctx = this;
        scope.clientHost = '//localhost:8080/'
        
        if (Object.is(NODE_ENV, 'development')) {
            scope.clientHost = '/js/client/'
        }
        await ctx.render('index')
    }
}

module.exports = Index