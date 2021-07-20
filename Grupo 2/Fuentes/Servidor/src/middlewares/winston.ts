import winston from "winston";

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: './logs/error.log', level: 'error' ,}),
        new winston.transports.File({ filename: './logs/combined.log' })
    ],
    exitOnError: false
});


export const stream = {
    write: (message: any) => {
        logger.info(message);
    },
};