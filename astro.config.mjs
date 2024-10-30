import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig, sharpImageService } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
    site: 'https://developer.actor',
    prefetch: true,

    image: {
        service: sharpImageService()
    },

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
            remarkPlugins: [remarkGfm, remarkSmartypants]
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
});
