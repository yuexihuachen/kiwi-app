
const nodeEnv = process.env.NODE_ENV
// ['production', 'development'],
let app = require("./src/index");
const port = process.env.PORT || 3000

if (Object.is(nodeEnv, 'production')) {
    app = require("./dist/index");
}

app.listen(port)