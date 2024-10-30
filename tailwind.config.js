module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            heading: ['Walsheim Regular', 'sans-serif'],
            source: ['IBM Plex Mono', 'monospace']
        },

        colors: {
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
            },

            'code-stroke': {
                DEFAULT: 'rgba(0, 0, 0, 0.1)',
                dark: 'rgba(255, 255, 255, 0.15)'
            },

            'code-bg': {
                DEFAULT: 'white',
                dark: 'rgba(0, 0, 0, 0.3)'
            },

            'toc-bg': {
                DEFAULT: '#f6f6f6',
                dark: '#111'
            },

            'toc-text': {
                DEFAULT: '#333',
                dark: '#fafafa'
            },

            'toc-active-bg': {
                DEFAULT: 'white',
                dark: 'rgba(255, 255, 255, 0.15)'
            },

            'toc-active-text': {
                DEFAULT: '#2833FF',
                dark: '#ABAFFF'
            }
        },

        extend: {
            fontSize: {
                base: '1.1rem',
                'toc-item': '0.75rem'
            },
            spacing: {
                128: '32rem',
                64: '16rem'
            },
            padding: {
                'toc-y': '0.2rem',
                'toc-d1': '16px',
                'toc-d2': '32px',
                'toc-d3': '48px',
                'toc-d4': '64px'
            }
        }
    },

    safelist: ['pl-toc-d1', 'pl-toc-d2', 'pl-toc-d3', 'pl-toc-d4']
};
