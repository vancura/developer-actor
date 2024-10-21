const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'page-bg': {
                    DEFAULT: '#F5F5F5',
                    dark: '#333333'
                },
                'page-text': {
                    DEFAULT: '#333333',
                    dark: '#F5F5F5'
                }
            },
            fontFamily: {
                walsheim: ['Walsheim Regular', 'sans-serif']
            }
        }
    },
    plugins: []
};
