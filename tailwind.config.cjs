const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts}'],
    plugins: [addDynamicIconSelectors()],
    theme: {
        fontFamily: {
            heading: ['Walsheim Regular', 'sans-serif'],
            source: ['IBM Plex Mono', 'monospace']
        },

        colors: {
            debug: 'rgba(255, 0, 255, 0.33)',
            transparent: 'transparent',

            primary: {
                DEFAULT: '#2833FF',
                hover: '#8C3FFF',
                dark: '#ABAFFF',
                'dark-hover': '#CAA6FF'
            },

            accent: {
                DEFAULT: '#D200A3',
                dark: '#FF7DE2'
            },

            background: {
                DEFAULT: 'rgb(245, 245, 245)',
                dark: 'rgb(34, 34, 34)',
                toc: 'rgb(248, 248, 248)',
                'toc-dark': 'rgb(17, 17, 17)',
                'toc-filter': 'white',
                'toc-filter-dark': '#333',
                'toc-active': 'white',
                'toc-active-dark': 'rgba(255, 255, 255, 0.1)',
                'toc-toolbar': 'rgba(248, 248, 248, 0.9)',
                'toc-toolbar-dark': 'rgba(17, 17, 17, 0.9)',
                'toc-toolbar-wide': 'rgba(245, 245, 245, 0.9)',
                'toc-toolbar-wide-dark': 'rgba(34, 34, 34, 0.9)',
                illustration: '#f3c3de',
                'illustration-dark': '#684358',
                'hero-mobile': 'rgba(245, 245, 245, 0.66)',
                banner: 'white',
                'banner-dark': '#171717'
            },

            text: {
                DEFAULT: '#333333',
                dark: '#F5F5F5',
                muted: 'rgba(0, 0, 0, 0.5)',
                'muted-dark': 'rgba(255, 255, 255, 0.5)',
                toc: '#333',
                'toc-dark': '#fafafa',
                'toc-active': '#2833FF',
                'toc-active-dark': '#ABAFFF'
            },

            selection: {
                DEFAULT: '#222',
                dark: '#f5f5f5',
                text: 'white',
                'text-dark': 'black'
            },

            ui: {
                border: 'rgba(0, 0, 0, 0.1)',
                'border-dark': 'rgba(255, 255, 255, 0.15)',
                'border-hr': 'rgba(0, 0, 0, 0.1)',
                'border-hr-dark': 'rgba(255, 255, 255, 0.15)'
            },

            toc: {
                progress: '#333',
                'progress-active': '#f5f5f5'
            },

            code: {
                stroke: 'rgba(0, 0, 0, 0.1)',
                'stroke-dark': 'rgba(255, 255, 255, 0.15)',
                'stroke-hover': 'rgba(0, 0, 0, 0.4)',
                'stroke-hover-dark': 'rgba(255, 255, 255, 0.35)',
                bg: '#ffffff',
                'bg-dark': '#171717'
            },

            'code-switcher': {
                tab: 'rgba(0, 0, 0, 0.1)',
                'tab-dark': 'rgba(255, 255, 255, 0.15)'
            },

            gray: {
                50: '#fafafa',
                100: '#f5f5f5',
                300: '#d4d4d4',
                600: '#666666',
                700: '#404040',
                900: '#171717'
            },

            white: 'white',
            black: 'black'
        },

        extend: {
            fontSize: {
                base: '1.1rem',
                'toc-item': '0.75rem'
            },

            spacing: {
                128: '32rem',
                64: '16rem'
            }
        }
    },

    safelist: ['pl-toc-d1', 'pl-toc-d2', 'pl-toc-d3', 'pl-toc-d4']
};
