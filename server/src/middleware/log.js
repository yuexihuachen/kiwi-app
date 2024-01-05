const log4js = require("log4js");
const utils =  require("utility");

module.exports = () => {
    log4js.configure({
        appenders: {
            everything: {
                type: "dateFile",
                filename: `logs/log_${utils.YYYYMMDD()}.log`,
                pattern: "-yyyy-MM-dd",
                encoding: 'utf-8',
                compress: true,
                layout: {
                    type: 'pattern',
                    pattern: '[%r (%x{pid}) %p %c] %m',
                    tokens: {
                      pid: function () {
                        return process.pid;
                      },
                    }
                }
              },
        },
        categories: {
          default: { appenders: ['everything'], level: 'debug' },
        },
      });
      
    const logger = log4js.getLogger('kiwi-app');
    return async (ctx, next) => {
        Object.defineProperties(ctx, {
            log: {
                get() {
                    return logger
                }
            }
        })

        await next()
    }
}