import type { TOCConfig } from '../types/toc';

/** Component-specific configuration constants. */
export const COMPONENT_CONFIG = {
    // Base Head constants.
    HEAD: {
        META: {
            LANGUAGE: 'English',
            AUTHOR: 'Apify',
            REFERRER: 'origin'
        },
        FONTS: {
            PRECONNECT: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
            FAMILIES: ['IBM+Plex+Mono:ital,wght@0,500']
        }
    },

    // Heading Links constants.
    HEADING_LINKS: {
        SELECTOR: '.mdx-content h2, .mdx-content h3, .mdx-content h4',
        ID_REGEX: /[^a-z0-9]+/g,
        TRIM_REGEX: /(^-|-$)/g,
        ANCHOR_CLASS: 'anchor absolute left-1 px-2 rounded-full border-none hover:bg-link dark:hover:bg-link-dark font-source text-[10pt] hover:text-bg dark:hover:text-bg-dark'
    },

    // MDX Wrapper constants.
    MDX: {
        FALLBACK_MESSAGE: 'Failed to load content. Please try refreshing the page.'
    },

    // TOC constants.
    TOC: {
        PROGRESS_BAR_SPACING: 4,
        PROGRESS_BAR_HEIGHT: 2,
        PROGRESS_BAR_BASE_WIDTH: 8,
        SCROLL_CHECK_INTERVAL: 1000,
        VIEWPORT_MARGINS: {
            TOP: 0.1,
            BOTTOM: 0.9
        },
        PROGRESS_BAR_DEBOUNCE: 16,
        SCROLL_THRESHOLD: 50,
        MOUSE_THRESHOLD: 400,
        OBSERVER_MARGIN: '0px 0px -80% 0px'
    } satisfies TOCConfig
} as const;

// Export specific configs for direct imports.
export const { HEAD, HEADING_LINKS, HERO, MDX, TOC } = COMPONENT_CONFIG;
