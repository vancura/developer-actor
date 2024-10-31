/** Interface for SEO metadata used across pages. */
export interface SEOMetadata {
    /** Page title */
    title: string;

    /** Meta description */
    description: string;

    /** Full URL for the page */
    permalink: string;

    /** URL to the OpenGraph image */
    ogImage?: string;

    /** ISO 8601 date string for article publish date */
    articlePublishedTime?: string;

    /** ISO 8601 date string for article last modification */
    articleModifiedTime?: string;
}

/** Interface for the table of contents heading entries. */
export interface HeadingEntry {
    /** Unique identifier for the heading */
    id: string;

    /** Display text of the heading */
    text: string;

    /** Heading level (h1-h6) */
    depth: number;
}
