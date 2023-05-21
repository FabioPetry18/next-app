import DailyRotateFile from "winston-daily-rotate-file";
import winston from "winston";

const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

export const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new DailyRotateFile({
       // dirname: '../logs', // diretório para os logs
        filename: 'logs/log-%DATE%.log', // nome do arquivo de log
        datePattern: 'DD-MM-YYYY',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '1d',
        format: fileFormat, 
      }),
  ],
});
