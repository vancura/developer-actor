/**
 * Creates a memoized version of a function that caches its results.
 *
 * @param fn - The function to memoize
 * @returns A memoized version of the function
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
    const cache = new Map<string, ReturnType<T>>();

    return (...args: Parameters<T>): ReturnType<T> => {
        const key = JSON.stringify(args);
        let o: ReturnType<T>;

        if (cache.has(key)) {
            o = cache.get(key)!;
        } else {
            const result = fn(...args);
            cache.set(key, result);

            o = result;
        }

        return o;
    };
}
