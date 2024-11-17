/** Interface for the table of contents heading entries. */
export interface IHeadingEntry {
    /** Unique identifier for the heading. */
    id: string;

    /** Display text of the heading. */
    text: string;

    /** Heading level (h1-h6). */
    depth: number;
}

/** Progress bar styling properties. */
export interface IProgressBarStyles {
    /** Width of the progress bar in pixels. */
    width: number;

    /** Height of the progress bar in pixels. */
    height: number;

    /** Top position of the progress bar in pixels. */
    top: number;
}

/** Table of contents entry. */
export interface ITOCEntry {
    /** Unique identifier for the entry. */
    id: string;

    /** Text content of the entry. */
    text: string;

    /** Depth of the entry. */
    depth: number;
}

/** Configuration options for the TOC component. */
export interface ITOCConfig {
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

    /** Threshold for scroll position changes. */
    readonly SCROLL_THRESHOLD: number;

    /** Threshold for mouse position to show TOC when inactive. */
    readonly MOUSE_THRESHOLD_INACTIVE: number;

    /** Threshold for mouse position to show TOC when active. */
    readonly MOUSE_THRESHOLD_ACTIVE: number;

    /** Margin for intersection observer. */
    readonly OBSERVER_MARGIN: string;

    /** Width at which TOC is considered wide, used to determine if TOC should be rendered in a separate panel. */
    readonly WIDE_SCREEN_WIDTH: number;
}
