const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'errorEjer.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function showError(){
    throw new Error("ahhh te salio error mmgvaaaso");
}

try{
    showError();
}catch(e){ // e será el error de la linea 18
    logger.log("error", e.toString());
    // logger.error("errorrrr");
}
