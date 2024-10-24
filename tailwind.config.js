module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            headline: ['Walsheim Regular', 'sans-serif'],
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
            }
        },

        extend: {
            fontSize: {
                base: '1.1rem'
            },
            spacing: {
                128: '32rem',
                64: '16rem'
            }
        }
    }
};
