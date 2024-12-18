import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig, sharpImageService } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
    site: 'https://whitepaper.actor',
    prefetch: true,
    devToolbar: { enabled: false },

    image: {
        service: sharpImageService()
    },

    integrations: [
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
