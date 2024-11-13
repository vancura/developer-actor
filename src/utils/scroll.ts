/** Options for smooth scrolling behavior. */
export interface ScrollOptions {
    /** ID of the target element to scroll to. */
    targetId: string;

    /** Callback to execute after scrolling completes. */
    onComplete?: () => void;

    /** Offset from the top of the target element in pixels. */
    offset?: number;
}

/** Result of a scroll operation. */
export interface ScrollResult {
    /** Whether the scroll operation was successful. */
    success: boolean;

    /** Target element that was scrolled to, if found. */
    element: HTMLElement | null;
}

/**
 * Asynchronously performs a smooth scroll to a target element identified by its ID.
 *
 * @param {Object} options - Configuration options for the scroll action.
 * @param {string} options.targetId - The ID of the target element to scroll to.
 * @param {number} [options.offset=0] - Additional offset to adjust the final scroll position. Default is `0`
 * @param {Function} [options.onComplete] - Callback function to be executed upon completion of the scroll.
 * @returns {Promise<ScrollResult>} A promise that resolves to an object containing the scroll result.
 */
export const smoothScrollTo = async ({ targetId, offset = 0, onComplete }: ScrollOptions): Promise<ScrollResult> => {
    const element = document.getElementById(targetId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (offset) {
            window.scrollBy(0, offset);
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                onComplete?.();
                resolve({ success: true, element });
            }, 1000);
        });
    }

    return { success: false, element: null };
};
