import type { ITOCConfig } from '../types/toc';

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
            PRECONNECT: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://apify.com'],
            FAMILIES: ['IBM+Plex+Mono:ital,wght@0,500']
        }
    },

    // Heading Links constants.
    HEADING_LINKS: {
        SELECTOR: '.mdx-content h2, .mdx-content h3, .mdx-content h4',
        ID_REGEX: /[^\da-z]+/g,
        TRIM_REGEX: /(^-|-$)/g
    },

    // MDX Wrapper constants.
    MDX: {
        FALLBACK_MESSAGE: 'Failed to load content. Please try refreshing the page.'
    },

    // TOC constants.
    TOC: {
        PROGRESS_BAR_SPACING: 4,
        PROGRESS_BAR_HEIGHT: 2,
        PROGRESS_BAR_BASE_WIDTH: 5,
        SCROLL_CHECK_INTERVAL: 1000 / 20,
        VIEWPORT_MARGINS: {
            TOP: 0.1,
            BOTTOM: 0.9
        },
        SCROLL_THRESHOLD: 50,
        MOUSE_THRESHOLD_INACTIVE: 24,
        MOUSE_THRESHOLD_ACTIVE: 320 + 24, // panel width + safe area for accidental mouse movement
        OBSERVER_MARGIN: '0px 0px -80% 0px',
        WIDE_SCREEN_WIDTH: 1710
    } satisfies ITOCConfig
} as const;

// Export specific configs for direct imports.
export const { HEAD, HEADING_LINKS, MDX, TOC } = COMPONENT_CONFIG;
