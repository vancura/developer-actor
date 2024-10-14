import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';
import remarkSmartypants from 'remark-smartypants';
import ViteRestart from 'vite-plugin-restart';

// https://astro.build/config
export default defineConfig({
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
        compress({
            Exclude: ['download', 'images', 'opengraph']
        }),
        metaTags(),
        tailwind()
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
});
