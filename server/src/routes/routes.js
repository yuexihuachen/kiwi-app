module.exports = [{
    match: '/home',
    controller: "home.index"
},{
    match: '/(.*)',//(.*)
    controller: "index.index"
}]