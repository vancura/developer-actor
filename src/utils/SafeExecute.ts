import { createLogger } from './Logger.ts';

const logger = createLogger({ prefix: 'SafeExecute' });

/**
 * Executes a function and returns its result. If the function throws an error, a fallback value is returned instead.
 *
 * @param {function(): T} operation - The function to execute safely.
 * @param {T} fallback - The value to return if the function throws an error.
 * @param {string} errorMessage - The error message to log if an error occurs.
 * @returns {T} The result of the function, or the fallback value if an error occurs.
 */
export function safeExecute<T>(operation: () => T, fallback: T, errorMessage: string): T {
    try {
        return operation();
    } catch (error) {
        logger.error(errorMessage, error);
        return fallback;
    }
}
