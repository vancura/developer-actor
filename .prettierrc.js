let astroPlugin = require.resolve('prettier-plugin-astro');
let organizeImportsPlugin = require.resolve('prettier-plugin-organize-imports');
let organizeAttributesPlugin = require.resolve('prettier-plugin-organize-attributes');
let astroOrganizeImportsPlugin = require.resolve('prettier-plugin-astro-organize-imports');
let cssOrderPlugin = require.resolve('prettier-plugin-css-order');
let tailwindPlugin = require.resolve('prettier-plugin-tailwindcss');
let jsdocPlugin = require.resolve('prettier-plugin-jsdoc');

module.exports = {
    plugins: [
        astroPlugin,
        organizeImportsPlugin,
        organizeAttributesPlugin,
        astroOrganizeImportsPlugin,
        cssOrderPlugin,
        tailwindPlugin,
        jsdocPlugin
    ],
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    proseWrap: 'never',
    singleQuote: true,
    semi: true,
    trailingComma: 'none',

    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        },
        {
            files: '*.mjs',
            options: {
                parser: 'babel'
            }
        },
        {
            files: '*.mdx',
            options: {
                parser: 'mdx'
            }
        },
        {
            files: '*.json',
            options: {
                parser: 'json'
            }
        },
        {
            files: '*.yml',
            options: {
                parser: 'yaml'
            }
        },
        {
            files: '*.yaml',
            options: {
                parser: 'yaml'
            }
        },
        {
            files: '*.md',
            options: {
                parser: 'markdown'
            }
        },
        {
            files: '*.js',
            options: {
                parser: 'babel'
            }
        },
        {
            files: '*.ts',
            options: {
                parser: 'typescript'
            }
        },
        {
            files: '*.tsx',
            options: {
                parser: 'typescript'
            }
        }
    ]
};
