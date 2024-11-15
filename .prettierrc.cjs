const astroPlugin = require.resolve('prettier-plugin-astro');
const organizeImportsPlugin = require.resolve('prettier-plugin-organize-imports');
const organizeAttributesPlugin = require.resolve('prettier-plugin-organize-attributes');
const astroOrganizeImportsPlugin = require.resolve('prettier-plugin-astro-organize-imports');
const cssOrderPlugin = require.resolve('prettier-plugin-css-order');
const tailwindPlugin = require.resolve('prettier-plugin-tailwindcss');
const jsdocPlugin = require.resolve('prettier-plugin-jsdoc');

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
    singleAttributePerLine: false,
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
