module.exports = {
    plugins: [
        require.resolve('prettier-plugin-astro'),
        require.resolve('prettier-plugin-organize-imports'),
        require.resolve('prettier-plugin-organize-attributes'),
        require.resolve('prettier-plugin-astro-organize-imports'),
        require.resolve('prettier-plugin-css-order'),
        require.resolve('prettier-plugin-tailwindcss')
    ],

    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    proseWrap: 'always',
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
