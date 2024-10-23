import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import remarkSmartypants from 'remark-smartypants';

// https://astro.build/config
export default {
    site: 'https://developer.actor',
    prefetch: true,
    integrations: [
        sitemap(),
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                themes: {
                    light: 'light-plus',
                    dark: 'dark-plus'
                },
                wrap: true
            },
            remarkPlugins: [remarkSmartypants]
        }),
        metaTags(),
        tailwind(),
        (await import('@playform/compress')).default({
            Exclude: [],
            CSS: false,
            HTML: {
                'html-minifier-terser': {
                    removeAttributeQuotes: false
                }
            }
        })
    ],
    vite: {
        ssr: {
            external: ['svgo']
        }
    },
    redirects: {}
};
