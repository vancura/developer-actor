import type { ScrollOptions, ScrollResult } from '../types/scroll';

/**
 * Smoothly scrolls to the target element.
 *
 * @param options - Scroll options including target ID and callbacks
 * @returns Promise that resolves with scroll result
 */
export const smoothScrollTo = async (options: ScrollOptions): Promise<ScrollResult> => {
    return new Promise((resolve) => {
        const targetElement = document.getElementById(options.targetId);

        if (targetElement) {
            const scrollOptions: ScrollIntoViewOptions = {
                behavior: 'smooth',
                block: 'start'
            };

            targetElement.scrollIntoView(scrollOptions);

            // Apply offset if specified
            if (options.offset) {
                window.scrollBy(0, options.offset);
            }

            // Resolve after animation
            setTimeout(() => {
                options.onComplete?.();
                resolve({
                    success: true,
                    element: targetElement
                });
            }, 1000);
        } else {
            console.error(`Target element not found: ${options.targetId}`);
            resolve({
                success: false,
                element: null
            });
        }
    });
};
