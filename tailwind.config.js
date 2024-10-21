const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {},
        extend: {
            fontFamily: {
                walsheim: ['Walsheim Regular', 'sans-serif']
            }
        }
    },
    plugins: []
};
