module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            heading: ['Walsheim Regular', 'sans-serif'],
            source: ['IBM Plex Mono', 'monospace']
        },

        colors: {
            debug: '#f0f',

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
                DEFAULT: '#F5F5F5',
                dark: '#222',
                navbar: '#f5f5f5',
                'navbar-dark': '#171717',
                toc: 'rgba(248, 248, 248, 1)',
                'toc-dark': 'rgba(17, 17, 17, 1)',
                'toc-filter': 'white',
                'toc-filter-dark': 'rgba(255, 255, 255, 0.1)',
                'toc-active': 'white',
                'toc-active-dark': 'rgba(255, 255, 255, 0.1)',
                'toc-toolbar': 'rgba(248, 248, 248, 0.9)',
                'toc-toolbar-dark': 'rgba(17, 17, 17, 0.9)'
            },

            text: {
                DEFAULT: '#333333',
                dark: '#F5F5F5',
                muted: 'rgba(0, 0, 0, 0.15)',
                'muted-dark': 'rgba(255, 255, 255, 0.15)',
                toc: '#333',
                'toc-dark': '#fafafa',
                'toc-active': '#2833FF',
                'toc-active-dark': '#ABAFFF'
            },

            selection: {
                DEFAULT: '#222',
                dark: '#f5f5f5',
                text: 'white',
                'text-dark': 'white'
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
                bg: '#ffffff',
                'bg-dark': '#171717'
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
