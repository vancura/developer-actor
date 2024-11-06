import type { ScrollOptions, ScrollResult } from '../types/scroll';

/**
 * Smoothly scrolls to the target element.
 *
 * @param options - Scroll options including target ID and callbacks
 * @returns Promise that resolves with scroll result
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
