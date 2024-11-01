/** Interface for the table of contents heading entries. */
export interface HeadingEntry {
    /** Unique identifier for the heading. */
    id: string;

    /** Display text of the heading. */
    text: string;

    /** Heading level (h1-h6). */
    depth: number;
}

/** Progress bar styling properties. */
export interface ProgressBarStyles {
    /** Width of the progress bar in pixels. */
    width: number;

    /** Height of the progress bar in pixels. */
    height: number;

    /** Top position of the progress bar in pixels. */
    top: number;
}

/** Table of contents entry. */
export interface TOCEntry {
    /** Unique identifier for the entry. */
    id: string;

    /** Text content of the entry. */
    text: string;

    /** Depth of the entry. */
    depth: number;
}

/** Configuration options for the TOC component. */
export interface TOCConfig {
    /** Spacing between progress bars in pixels. */
    readonly PROGRESS_BAR_SPACING: number;

    /** Height of each progress bar in pixels. */
    readonly PROGRESS_BAR_HEIGHT: number;

    /** Base width multiplier for progress bars. */
    readonly PROGRESS_BAR_BASE_WIDTH: number;

    /** Interval for scroll checks in milliseconds. */
    readonly SCROLL_CHECK_INTERVAL: number;

    /** Viewport margins for intersection observer. */
    readonly VIEWPORT_MARGINS: {
        /** Top margin in pixels. */
        readonly TOP: number;

        /** Bottom margin in pixels. */
        readonly BOTTOM: number;
    };

    /** Debounce delay for progress bar updates in milliseconds. */
    readonly PROGRESS_BAR_DEBOUNCE: number;
}
