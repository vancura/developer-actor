import { createLogger } from './logger';

const logger = createLogger({ prefix: 'SafeExecute' });

/** Safely executes an operation with error handling and logging. */
export function safeExecute<T>(operation: () => T, fallback: T, errorMessage: string): T {
    try {
        return operation();
    } catch (error) {
        logger.error(errorMessage, error);
        return fallback;
    }
}
