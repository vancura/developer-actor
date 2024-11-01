import type { ILogger, LoggerFactory, LoggerOptions, LogLevel } from '../types';

/** @implements {ILogger} */
class Logger implements ILogger {
    private readonly prefix: string;
    private readonly minLevel: LogLevel;

    constructor(options: LoggerOptions = {}) {
        this.prefix = options.prefix ? `[${options.prefix}]` : '';
        this.minLevel = options.minLevel || import.meta.env.LOG_LEVEL || 'info';
    }

    /**
     * Determine if a log message should be displayed based on the minimum log level.
     *
     * @param level - Log level to check
     * @returns True if the log message should be displayed, false otherwise
     */
    private shouldLog(level: LogLevel): boolean {
        const levels: LogLevel[] = ['error', 'warning', 'info'];
        const minLevelIndex = levels.indexOf(this.minLevel);
        const currentLevelIndex = levels.indexOf(level);
        return currentLevelIndex <= minLevelIndex;
    }

    /**
     * Log a message with the specified level.
     *
     * @param level - Log level
     * @param message - Message to log
     * @param error - Optional error object to log
     */
    private log(level: LogLevel, message: string, error?: unknown): void {
        if (!this.shouldLog(level)) return;

        const prefix = this.prefix ? `${this.prefix} ` : '';
        const formattedMessage = `${prefix}${message}`;

        switch (level) {
            case 'info':
                console.info(formattedMessage);
                break;
            case 'warning':
                console.warn(formattedMessage);
                break;
            case 'error':
                console.error(formattedMessage, error || '');
                break;
        }
    }

    /** @inheritdoc */
    public info(message: string): void {
        this.log('info', message);
    }

    /** @inheritdoc */
    public warn(message: string): void {
        this.log('warning', message);
    }

    /** @inheritdoc */
    public error(message: string, error?: unknown): void {
        this.log('error', message, error);
    }
}

/** Create a new logger instance */
export const createLogger: LoggerFactory = (options = {}) => new Logger(options);
