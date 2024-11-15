/** Supported log levels for the logger. */
export type LogLevel = 'info' | 'warning' | 'error';

/** Logger options interface. */
export interface LoggerOptions {
    /** Prefix for the logger messages. */
    prefix?: string;

    /** Minimum log level to display. Defaults to 'info'. */
    minLevel?: LogLevel;
}

/**
 * Logger interface for type safety when using the logger. Provides methods for consistent logging across the
 * application.
 */
export interface ILogger {
    /**
     * Log an info message. Only displays if LOG_LEVEL is 'info'.
     *
     * @param message - Message to log.
     */
    info(message: string): void;

    /**
     * Log a warning message. Only displays if LOG_LEVEL is 'info' or 'warning'.
     *
     * @param message - Message to log.
     */
    warn(message: string): void;

    /**
     * Log an error message. Always displays regardless of LOG_LEVEL.
     *
     * @param message - Message to log.
     * @param error - Optional error object to log.
     */
    error(message: string, error?: unknown): void;
}

/**
 * Create a new logger instance.
 *
 * @param options - Logger configuration options.
 * @returns A configured logger instance.
 */
export type LoggerFactory = (options?: LoggerOptions) => ILogger;

/**
 * Logger is a class that provides a simple logging mechanism with support for different log levels.
 *
 * @implements {ILogger}
 */
class Logger implements ILogger {
    private readonly prefix: string;
    private readonly minLevel: LogLevel;

    constructor(options: LoggerOptions = {}) {
        this.prefix = options.prefix ? `[${options.prefix}]` : '';
        this.minLevel = options.minLevel ?? import.meta.env.LOG_LEVEL ?? 'info';
    }

    /**
     * Determine if a log message should be displayed based on the minimum log level.
     *
     * @param level - Log level to check.
     * @returns True if the log message should be displayed, false otherwise.
     */
    private shouldLog(level: LogLevel): boolean {
        const levels: LogLevel[] = ['error', 'warning', 'info'];
        const minLevelIndex = levels.indexOf(this.minLevel);
        const currentLevelIndex = levels.indexOf(level);
        return currentLevelIndex <= minLevelIndex;
    }

    // noinspection FunctionNamingConventionJS
    /**
     * Log a message with the specified level.
     *
     * @param level - Log level.
     * @param message - Message to log.
     * @param error - Optional error object to log.
     */
    private log(level: LogLevel, message: string, error?: unknown): void {
        if (this.shouldLog(level)) {
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
