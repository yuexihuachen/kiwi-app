const {
    getEnv
} = require("./utils/index");

const {
    NODE_ENV: node_env
} = getEnv()

module.exports = require(`./config/${node_env}`)