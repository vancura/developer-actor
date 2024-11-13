/**
 * Creates a memoized version of the provided function which caches the results of function calls to optimize
 * performance for repeated calls with the same arguments.
 *
 * @param fn The function to be memoized. It can have any number of arguments.
 * @returns A new function that, when called with a set of arguments, returns the cached result if available, or invokes
 *   the original function and caches its result before returning it.
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
