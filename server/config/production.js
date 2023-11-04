const {
    getEnv
} = require("../utils/index");

const env = getEnv()

module.exports = {
    "PORT": env.PORT || "3000",
    "NODE_ENV": env.NODE_ENV || 'production',
    logFilePath: '/logs/',
    staticResourceMappingPath: '', //path.resolve(__dirname, "../chunkmap.json"),
    logLevel: 'info'
}
