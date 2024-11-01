/** Supported log levels for the logger */
export type LogLevel = 'info' | 'warning' | 'error';

/** Interface for SEO metadata used across pages. */
export interface SEOMetadata {
    /** Page title */
    title: string;

    /** Meta description */
    description: string;

    /** Full URL for the page */
    permalink: string;

    /** URL to the OpenGraph image */
    ogImage?: string;

    /** ISO 8601 date string for article publish date */
    articlePublishedTime?: string;

    /** ISO 8601 date string for article last modification */
    articleModifiedTime?: string;
}

/** Interface for the table of contents heading entries. */
export interface HeadingEntry {
    /** Unique identifier for the heading */
    id: string;

    /** Display text of the heading */
    text: string;

    /** Heading level (h1-h6) */
    depth: number;
}

/** Logger options interface. */
export interface LoggerOptions {
    /** Prefix for the logger messages */
    prefix?: string;

    /** Minimum log level to display. Defaults to 'info' */
    minLevel?: LogLevel;
}

/** Logger interface for type safety when using the logger. Provides methods for consistent logging across the application. */
export interface ILogger {
    /**
     * Log an info message. Only displays if LOG_LEVEL is 'info'.
     *
     * @param message - Message to log
     */
    info(message: string): void;

    /**
     * Log a warning message. Only displays if LOG_LEVEL is 'info' or 'warning'.
     *
     * @param message - Message to log
     */
    warn(message: string): void;

    /**
     * Log an error message. Always displays regardless of LOG_LEVEL.
     *
     * @param message - Message to log
     * @param error - Optional error object to log
     */
    error(message: string, error?: unknown): void;
}

/**
 * Create a new logger instance.
 *
 * @param options - Logger configuration options
 * @returns A configured logger instance
 */
export type LoggerFactory = (options?: LoggerOptions) => ILogger;
