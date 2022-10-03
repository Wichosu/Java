const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const dividir = (a, b) => {
  if ((a / b) !== Infinity) {
    return a / b
  }
  throw new Error("El resultado es infinito");
}

try {
  dividir(5, 0);
}
catch (e) {
  logger.error(`El error es: ${e}`);
}