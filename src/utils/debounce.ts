/**
 * Creates a debounced function that delays invoking the provided function until after a specified wait time has elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {T} func - The function to be debounced.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {(...args: Parameters<T>) => void} - A new debounced version of the given function.
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: number | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = window.setTimeout(() => {
            func(...args);
            timeout = null;
        }, wait);
    };
}
