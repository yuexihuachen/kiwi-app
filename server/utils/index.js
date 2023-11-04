function getEnv(env = {}) {
    return Object.keys(process.env)
        .filter((key) => process.env[key] !== undefined)
        .reduce(
            (envCopy, key) => {
                envCopy[key] = String(process.env[key])
                return envCopy
            },
            env,
        )
}

module.exports = {
    getEnv
}