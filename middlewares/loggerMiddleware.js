

const logger = require("../logs/loggers");



const loggerMiddleware = (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  logger.info(`${'this is coming form logger middleware'}`)
  next();
}


module.exports = loggerMiddleware;
