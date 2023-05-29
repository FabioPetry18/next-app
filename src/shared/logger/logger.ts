import DailyRotateFile from "winston-daily-rotate-file";
import winston from "winston";

const fileFormat = winston.format.combine(
  winston.format.timestamp({format:'DD/MM/YYYY HH:mm:ss'}),
  winston.format.json()
);

export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new DailyRotateFile({
        filename: 'logs/log-%DATE%.log',
        datePattern: 'DD-MM-YYYY',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '1d',
        format: fileFormat, 
      }),
  ],
});
