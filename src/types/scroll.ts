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
