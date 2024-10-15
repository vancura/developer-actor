import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import remarkSmartypants from 'remark-smartypants';
import ViteRestart from 'vite-plugin-restart';

// https://astro.build/config
export default {
    site: 'https://developer.actor',
    prefetch: true,
    integrations: [
        sitemap(),
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'dracula',
                wrap: true
            },
            remarkPlugins: [remarkSmartypants]
        }),
        metaTags(),
        tailwind(),
        (await import('@playform/compress')).default({
            Exclude: ['download', 'images', 'opengraph'],
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
        },
        plugins: [
            ViteRestart({
                restart: ['src/scss/**/*.scss']
            })
        ]
    },
    redirects: {}
};
