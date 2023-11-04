// 创建一个缓存模式
const createProxyFactory = function (fn) {
    const cache = new Map();
    return function (...args) {
        const argsKey = Array.prototype.join.call(args, ',');
        if (cache.has(argsKey)) {
            return cache.get(argsKey);
        }
        // 限制map的边界
        if (Map.size > 50) {
           const keys = Array.from(map.keys())
           const lastKey = keys[keys.length - 1]
           map.delete(lastKey)
        }
        cache.set(argsKey, fn.apply(this, arguments))
        return cache.get(argsKey);
    }
};

module.exports = {
    createProxyFactory
}