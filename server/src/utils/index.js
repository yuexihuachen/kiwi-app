function getEnv(env = {}) {
    const processEnv = Object.keys(process.env)
        .filter((key) => process.env[key] !== undefined)
        .reduce(
            (envCopy, key) => {
                envCopy[key] = String(process.env[key])
                return envCopy
            },
            env,
        )
    return processEnv

}

module.exports = {
    getEnv
}