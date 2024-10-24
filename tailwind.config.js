import plugin from 'tailwindcss/plugin';

const colors = {
    debug: '#f0f',
    temp: 'rgba(255, 0, 255, 0.25)',

    bg: {
        DEFAULT: '#F5F5F5',
        dark: '#222'
    },

    text: {
        DEFAULT: '#333333',
        dark: '#F5F5F5'
    },

    link: {
        DEFAULT: '#2833FF',
        hover: '#8C3FFF',
        dark: '#ABAFFF',
        'dark-hover': '#CAA6FF'
    },

    strong: {
        DEFAULT: '#D200A3',
        dark: '#FF7DE2'
    },

    hr: {
        DEFAULT: 'rgba(0, 0, 0, 0.15)',
        dark: 'rgba(255, 255, 255, 0.15)'
    },

    selection: {
        DEFAULT: '#222',
        text: '#F5F5F5',
        dark: '#F5F5F5',
        'dark-text': '#222'
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

        '::selection': {
            backgroundColor: theme('colors.selection.DEFAULT'),
            color: theme('colors.selection.text'),
            textShadow: 'inherit', // hard-codes fallback text selection, color is Chrome per via http://stackoverflow.com/a/16094931/864799
            '@media (prefers-color-scheme: dark)': {
                backgroundColor: theme('colors.selection.dark'),
                color: theme('colors.selection.dark-text')
            }
        },

        a: {
            color: theme('colors.link.DEFAULT'),
            '&:hover': { color: theme('colors.link.hover') },
            '&::selection': { backgroundColor: theme('colors.link.DEFAULT') },
            '@media (prefers-color-scheme: dark)': {
                color: theme('colors.link.dark'),
                '&:hover': { color: theme('colors.link.dark-hover') },
                '&::selection': { backgroundColor: theme('colors.link.dark') }
            }
        },

        'html, body, table': {
            fontFeatureSettings: fontFeatureSettings.default
        },

        '.mdx-content a': {
            fontWeight: '500',
            borderBottom: '0.1em solid'
        },

        '.mdx-content strong': {
            fontWeight: '500',
            color: theme('colors.strong.DEFAULT'),
            '&::selection': { backgroundColor: theme('colors.strong.DEFAULT') },
            '@media (prefers-color-scheme: dark)': {
                color: theme('colors.strong.dark'),
                '&::selection': { backgroundColor: theme('colors.strong.dark') }
            }
        },

        '.mdx-content em': {
            fontStyle: 'normal',
            fontWeight: '500',
            color: theme('colors.strong.DEFAULT'),
            borderBottom: '1.5px solid',
            '&::selection': { backgroundColor: theme('colors.strong.DEFAULT') },
            '@media (prefers-color-scheme: dark)': {
                color: theme('colors.strong.dark'),
                '&::selection': { backgroundColor: theme('colors.strong.dark') }
            }
        },

        '.mdx-content h1, .mdx-content h2, .mdx-content h3': {
            fontFamily: theme('fontFamily.headline'),
            fontVariantNumeric: 'oldstyle-nums proportional-nums stacked-fractions',
            fontFeatureSettings: fontFeatureSettings.headings,
            letterSpacing: '-0.03em',
            textWrap: 'balance'
        },

        '.mdx-content h1': {
            paddingBottom: '1.2rem',
            fontSize: theme('fontSize.4xl'),
            lineHeight: '1.1em',
            '@media (min-width: 1024px)': {
                paddingBottom: '1.6rem',
                fontSize: theme('fontSize.5xl')
            }
        },

        '.mdx-content h2': {
            marginTop: '2.9rem',
            paddingTop: '2.4rem',
            paddingBottom: '1.2rem',
            fontSize: theme('fontSize.3xl'),
            lineHeight: '1.1em',
            borderTop: `3px solid ${theme('colors.hr.DEFAULT')}`,
            '@media (min-width: 1024px)': {
                marginTop: '3.6rem',
                paddingTop: '3.2rem',
                paddingBottom: '1.2rem',
                fontSize: theme('fontSize.4xl')
            },
            '@media (prefers-color-scheme: dark)': {
                borderTop: `3px solid ${theme('colors.hr.dark')}`
            }
        },

        '.mdx-content h3': {
            paddingTop: '1.0rem',
            paddingBottom: '1.2rem',
            fontSize: theme('fontSize.2xl'),
            lineHeight: '1.1em',
            '@media (min-width: 1024px)': {
                paddingTop: '1.2rem',
                paddingBottom: '1.4rem',
                fontSize: theme('fontSize.3xl')
            }
        },

        '.mdx-content h4': {
            paddingTop: '1.0rem',
            paddingBottom: '1.2rem',
            fontSize: theme('fontSize.xl'),
            lineHeight: '1.1em',
            '@media (min-width: 1024px)': {
                paddingTop: '1.2rem',
                paddingBottom: '1.4rem',
                fontSize: theme('fontSize.2xl')
            }
        },

        '.mdx-content p, .mdx-content ul, .mdx-content ol, .mdx-content pre, .mdx-content kbd, .mdx-content samp, .mdx-content code, .mdx-content table': {
            lineHeight: '1.35rem',
            marginBottom: '1.4rem',
            '@media (min-width: 1024px)': {
                fontSize: '1.1rem',
                lineHeight: '1.7rem',
                marginBottom: '1.7rem'
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

        '.mdx-content p code, .mdx-content table code': {
            padding: '0.1em 0.4em',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            fontFamily: 'IBM Plex Mono, monospace',
            fontOpticalSizing: 'auto',
            fontSize: '0.91em',
            borderRadius: theme('borderRadius.md'),
            '@media (prefers-color-scheme: dark)': {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
            }
        },

        '.mdx-content pre': {
            padding: theme('spacing.4'),
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: theme('borderRadius.md'),
            '*': {
                fontSize: '0.97em',
                fontFamily: 'IBM Plex Mono, monospace',
                fontOpticalSizing: 'auto'
            },
            '@media (prefers-color-scheme: dark)': {
                border: '1px solid rgba(255, 255, 255, 0.15)'
            }
        },

        '.mdx-content table': {
            width: '100%',

            'thead th:first-child': {
                width: '33%'
            },

            'thead th:nth-child(3)': {
                width: '33%'
            },

            tr: {
                margin: '0.75rem 0',
                '&:not(:last-child)': {
                    borderBottom: `1px solid ${theme('colors.hr.DEFAULT')}`
                },
                '@media (prefers-color-scheme: dark)': {
                    '&:not(:last-child)': { borderBottom: `1px solid ${theme('colors.hr.dark')}` }
                }
            },

            td: {
                padding: '0.75rem 0',
                verticalAlign: 'top'
            },

            th: {
                borderBottom: `1px solid ${theme('colors.text.DEFAULT')}`,
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
