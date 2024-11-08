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
                wrap: true,
                transformers: [
                    {
                        pre(node) {
                            node.children.unshift({
                                type: 'element',
                                tagName: 'button',
                                properties: {
                                    class: 'copy-button',
                                    'aria-label': 'Copy code to clipboard'
                                },
                                children: [{ type: 'text', value: 'Copy' }]
                            });
                            return node;
                        }
                    }
                ]
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
