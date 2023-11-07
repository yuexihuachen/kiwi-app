
const path = require("path")
const fs = require("fs")
const readPkgUp = require('read-pkg-up')

function getUtils(cwd = process.cwd()) {

    const { packageJson = {}, path: pkgPath } = readPkgUp.sync({
        cwd: fs.realpathSync(cwd),
    })
console.log(pkgPath)
     
    const rootDir = path.dirname(pkgPath)

    const fromRoot = (...p) => path.join(rootDir, ...p)
    const hasFile = (...p) => fs.existsSync(fromRoot(...p))

    const firstFile = (...files) => {
        const file = files.find((f) => hasFile(f))
        if (file) {
            return fromRoot(file)
        } else {
            return null
        }
    }

    const isTypeScript =
        hasFile('tsconfig.json') ||
        hasFile('client/tsconfig.json') ||
        hasFile('server/tsconfig.json')

    const isApp = true
    return {
        isTypeScript,
        rootDir,
        fromRoot,
        hasFile,
        firstFile,
        isApp
    }
}

const defaultUtils = getUtils()


function utilsFor(subdir = 'client') {
    let subDirUtils = defaultUtils
    if (defaultUtils.isApp) {
      subDirUtils = getUtils(subDirUtils.fromRoot(subdir))
    }
    return subDirUtils
}

function removeEmpty(input) {
    if (Array.isArray(input)) {
        return input.filter((item) => item != null)
    } else {
        return Object.entries(input).reduce(
            (a, [k, v]) => {
                if (v != null) {
                    a[k] = v
                }
                return a
            },
            {},
        )
    }
}



module.exports = {
    getUtils,
    utilsFor,
    removeEmpty
}
