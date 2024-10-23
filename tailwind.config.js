const plugin = require('tailwindcss/plugin');

const colors = {
    debug: '#f0f',
    temp: 'rgba(255, 0, 255, 0.25)',

    'page-bg': {
        DEFAULT: '#F5F5F5',
        dark: '#333333'
    },

    'page-text': {
        DEFAULT: '#333333',
        dark: '#F5F5F5'
    },

    link: {
        DEFAULT: '#8e2da9',
        hover: '#c163db',
        dark: '#e278ff',
        'dark-hover': '#eba1ff'
    },

    hr: {
        DEFAULT: 'rgba(0, 0, 0, 0.1)',
        dark: 'rgba(255, 255, 255, 0.1)'
    }
};

const fontFamilies = {
    headline: ['Walsheim Regular', 'sans-serif']
};

const fontFeatureSettings = {
    default: '"kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0',
    headings: '"liga" 1, "dlig" 1, "onum" 1, "frac" 0, "case" 1, "ss01" 0, "ss02" 0, "ss03" 0, "ss04" 0, "kern" 1, "numr" 0'
};

const customBase = ({ addBase, theme }) => {
    addBase({
        '@font-face': {
            fontFamily: 'Walsheim Regular',
            fontStyle: 'normal',
            fontWeight: 'normal',
            src: 'url("/fonts/GT-Walsheim-Regular.woff2") format("woff2")',
            fontDisplay: 'swap'
        },

        ':root': {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
        },

        html: { cursor: 'default' },

        'html, body': { scrollBehavior: 'initial' },

        '*': { WebkitFontSmoothing: 'inherit' },

        'html, body, table': {
            fontFeatureSettings: fontFeatureSettings.default
        },

        '.mdx-content h1, .mdx-content h2, .mdx-content h3': {
            fontFamily: theme('fontFamily.headline'),
            fontVariantNumeric: 'oldstyle-nums proportional-nums stacked-fractions',
            fontFeatureSettings: fontFeatureSettings.headings,
            letterSpacing: '-0.03em'
        },

        '.mdx-content h1': {
            paddingTop: '1em',
            fontSize: theme('fontSize.4xl'),
            lineHeight: '1.1em',
            '@media (min-width: 768px)': {
                fontSize: theme('fontSize.5xl')
            }
        },

        '.mdx-content h2': {
            paddingTop: '3rem',
            paddingBottom: '1rem',
            fontSize: theme('fontSize.3xl'),
            lineHeight: '1.1em',
            '@media (min-width: 768px)': {
                fontSize: theme('fontSize.4xl')
            }
        },

        '.mdx-content h3': {
            paddingTop: '3rem',
            paddingBottom: '1rem',
            fontSize: theme('fontSize.2xl'),
            lineHeight: '1.1em',
            '@media (min-width: 768px)': {
                fontSize: theme('fontSize.3xl')
            }
        },

        '.mdx-content h4': {
            paddingTop: '3rem',
            paddingBottom: 0,
            fontSize: theme('fontSize.xl'),
            lineHeight: '1.1em',
            '@media (min-width: 768px)': {
                fontSize: theme('fontSize.2xl')
            }
        },

        '.mdx-content p, .mdx-content ul, .mdx-content ol, .mdx-content pre, .mdx-content kbd, .mdx-content samp, .mdx-content code, .mdx-content table': {
            marginTop: '1em'
        },

        a: {
            color: theme('colors.link.DEFAULT'),
            '&:hover': { color: theme('colors.link.hover') },
            '@media (prefers-color-scheme: dark)': {
                color: theme('colors.link.dark'),
                '&:hover': { color: theme('colors.link.dark-hover') }
            }
        },

        '.mdx-content abbr': {
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "smcp" 1, "c2sc" 1',
            textTransform: 'uppercase',
            cursor: 'help'
        },

        '.mdx-content time': {
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0'
        },

        '.mdx-content pre, .mdx-content kbd, .mdx-content samp, .mdx-content code': {
            fontFeatureSettings: '"kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1'
        },

        '.mdx-content sup': {
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "sups" 1'
        },

        '.mdx-content sub': {
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "subs" 1'
        },

        'input[type="color"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="number"], input[type="range"], input[type="tel"], input[type="week"]': {
            fontFeatureSettings: '"kern" 0, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 0, "lnum" 1, "zero" 0'
        },

        '.mdx-content tbody, .mdx-content caption': {
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1'
        },

        '.mdx-content dd, .mdx-content dt': {
            display: 'inline-block',
            margin: '0'
        },

        '.mdx-content hr': {
            border: 'none',
            borderTop: `3px solid ${theme('colors.hr.DEFAULT')}`,
            margin: '3em 0',
            '@media (prefers-color-scheme: dark)': {
                borderTop: `3px solid ${theme('colors.hr.dark')}`
            }
        },

        '.mdx-content a': {
            borderBottom: `1px solid`
        },

        '.mdx-content p code': {
            padding: '0.1em 0.4em',
            backgroundColor: 'white',
            fontFamily: 'Fira Code, monospace',
            fontOpticalSizing: 'auto',
            borderRadius: theme('borderRadius.md'),
            boxShadow: theme('boxShadow.sm'),
            '@media (prefers-color-scheme: dark)': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }
        },

        '.mdx-content pre': {
            padding: theme('spacing.4'),
            borderRadius: theme('borderRadius.md'),
            boxShadow: theme('boxShadow.sm'),
            '*': {
                fontSize: '0.97em',
                fontFamily: 'Fira Code, monospace',
                fontOpticalSizing: 'auto'
            },
            '@media (prefers-color-scheme: dark)': {
                boxShadow: 'none'
            }
        },

        '.mdx-content table': {
            width: '100%',

            tr: {
                '&:not(:last-child)': {
                    borderBottom: `1px solid ${theme('colors.hr.DEFAULT')}`
                },
                '@media (prefers-color-scheme: dark)': {
                    '&:not(:last-child)': { borderBottom: `1px solid ${theme('colors.hr.dark')}` }
                }
            },

            td: {
                width: '50%',
                display: 'inline-block',
                padding: '0.5em 0'
            },

            th: {
                borderBottom: `1px solid ${theme('colors.hr.DEFAULT')}`,
                padding: '0 0 0.5em',
                textAlign: 'left',
                fontWeight: 'normal',
                '@media (prefers-color-scheme: dark)': {
                    borderBottom: `1px solid ${theme('colors.hr.dark')}`
                }
            }
        }
    });
};

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: fontFamilies,
        colors: colors,
        extend: {
            spacing: {
                128: '32rem',
                64: '16rem'
            }
        }
    },
    plugins: [plugin(customBase)]
};
