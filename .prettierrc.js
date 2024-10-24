let astroPlugin = require.resolve('prettier-plugin-astro');
let organizeImportsPlugin = require.resolve('prettier-plugin-organize-imports');
let organizeAttributesPlugin = require.resolve('prettier-plugin-organize-attributes');
let astroOrganizeImportsPlugin = require.resolve('prettier-plugin-astro-organize-imports');
let cssOrderPlugin = require.resolve('prettier-plugin-css-order');

module.exports = {
    plugins: [astroPlugin, organizeImportsPlugin, organizeAttributesPlugin, astroOrganizeImportsPlugin, cssOrderPlugin],
    tabWidth: 4,
    useTabs: false,
    printWidth: 1000,
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
        }
    ]
};
