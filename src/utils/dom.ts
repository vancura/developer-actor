import { createLogger } from './Logger.ts';

const logger = createLogger({ prefix: 'DOM' });

/**
 * Selects and returns the first element within the document that matches the specified group of selectors. Unlike the
 * standard querySelector, this function includes error handling to provide a null value rather than throwing an error
 * if the selector is invalid or causes an issue.
 *
 * @template T - The type of the element expected to be returned.
 * @param {string} selector - A string containing one or more selectors to match.
 * @param {ParentNode} [context=document] - An optional context within which to search for the selector. Defaults to the
 *   entire document. Default is `document`
 * @returns {T | null} The first element within the context that matches the selector, or null if no matches are found
 *   or an error occurs.
 */
export const safeQuerySelector = <T extends Element>(selector: string, context: ParentNode = document): T | null => {
    try {
        return context.querySelector(selector);
    } catch (error) {
        logger.error(`Failed to query selector: ${selector}`, error);

        return null;
    }
};
