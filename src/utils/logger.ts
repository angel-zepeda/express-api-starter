import { createLogger, transports, format } from 'winston'
import morgan from 'morgan'

export const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `${info.timestamp} ${info.message}`),
  ),

  transports: [
    new transports.File({
      filename: `${__dirname}/logs/app.log`,
      maxsize: 5242880, // 5mb
      maxFiles: 5,
    }),
    new transports.Console(),
  ],
})

const myStream = {
  write: (text: string) => {
    logger.info(text)
  },
}

export const logs = () => {
  return {
    tiny: morgan(':>> :method :url :status :req[header] - :response-time ms', { stream: myStream }),
  }
}
