import { createLogger } from './logger';

const logger = createLogger({ prefix: 'DOM' });

/** Safely query a selector from the DOM. */
export const safeQuerySelector = <T extends Element>(selector: string, context: ParentNode = document): T | null => {
    try {
        return context.querySelector(selector);
    } catch (error) {
        logger.error(`Failed to query selector: ${selector}`, error);

        return null;
    }
};
