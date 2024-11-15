const astroPlugin = require('eslint-plugin-astro');
const eslint = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const nodePlugin = require('eslint-plugin-n');
const perfectionistPlugin = require('eslint-plugin-perfectionist');
const prettier = require('eslint-config-prettier');
const promisePlugin = require('eslint-plugin-promise');
const regexPlugin = require('eslint-plugin-optimize-regex');
const securityPlugin = require('eslint-plugin-security');
const sonarjsPlugin = require('eslint-plugin-sonarjs');
const tailwindcssPlugin = require('eslint-plugin-tailwindcss');
const tseslintPlugin = require('@typescript-eslint/eslint-plugin');
const unicornPlugin = require('eslint-plugin-unicorn');

module.exports = [
    eslint.configs.recommended,
    ...astroPlugin.configs['flat/recommended'],
    prettier,

    {
        ignores: [
            '.astro/**',
            '.git/**',
            '.vscode/**',
            '*.min.*',
            '**/*.json',
            '**/*.md',
            '**/*.mdx',
            '**/*.yaml',
            '**/*.yml',
            'build/**',
            'coverage/**',
            'dist/**',
            'node_modules/**',
            'public/**'
        ]
    },

    {
        files: ['**/*.astro'],

        languageOptions: {
            parser: astroPlugin.parser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: './tsconfig.json',
                extraFileExtensions: ['.astro']
            }
        },

        plugins: {
            '@typescript-eslint': tseslintPlugin,
            astro: astroPlugin,
            import: importPlugin,
            jsdoc: jsdocPlugin,
            promise: promisePlugin,
            sonarjs: sonarjsPlugin,
            security: securityPlugin,
            tailwindcss: tailwindcssPlugin,
            unicorn: unicornPlugin,
            n: nodePlugin,
            'optimize-regex': regexPlugin,
            perfectionist: perfectionistPlugin
        },

        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.ts', '.mjs', '.astro', '.json', '.yml', '.yaml', '.md']
                }
            }
        },

        rules: {
            // Extending recommended configs
            ...tseslintPlugin.configs['recommended'].rules,
            ...tseslintPlugin.configs['recommended-requiring-type-checking'].rules,
            ...tseslintPlugin.configs['strict'].rules,
            ...astroPlugin.configs['recommended'].rules,
            ...importPlugin.configs['recommended'].rules,
            ...promisePlugin.configs['recommended'].rules,
            ...sonarjsPlugin.configs['recommended'].rules,
            ...securityPlugin.configs['recommended'].rules,
            ...unicornPlugin.configs['recommended'].rules,
            ...nodePlugin.configs['recommended'].rules,

            // TypeScript
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/strict-boolean-expressions': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
            '@typescript-eslint/member-ordering': 'error',
            '@typescript-eslint/method-signature-style': ['error', 'property'],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase']
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase']
                },
                {
                    selector: 'parameter',
                    format: ['camelCase'],
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'property',
                    format: ['camelCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allow'
                },
                {
                    selector: 'typeProperty',
                    format: ['camelCase', 'UPPER_CASE']
                },
                {
                    selector: 'enumMember',
                    format: ['PascalCase', 'UPPER_CASE']
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase']
                },
                {
                    selector: 'interface',
                    format: ['PascalCase'],
                    prefix: ['I'],
                    filter: {
                        regex: '^Props$',
                        match: false
                    }
                }
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-floating-promises': 'error',

            // Import
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off',
            'import/order': ['error', { 'newlines-between': 'always' }],

            // Perfectionist
            'perfectionist/sort-imports': [
                'error',
                {
                    type: 'natural',
                    order: 'asc',
                    groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']]
                }
            ],

            // Regex
            'optimize-regex/optimize-regex': 'error',

            // Unicorn
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        pascalCase: true
                    },
                    ignore: ['^[A-Z][a-zA-Z0-9]+\\.astro$']
                }
            ],

            // SonarJS
            'sonarjs/cognitive-complexity': ['error', 15],
            'sonarjs/no-duplicate-string': 'error',
            'sonarjs/no-identical-functions': 'error',

            // Promise
            'promise/always-return': 'error',
            'promise/no-return-wrap': 'error',
            'promise/param-names': 'error',
            'promise/catch-or-return': 'error',
            'promise/no-native': 'off',
            'promise/no-callback-in-promise': 'warn',

            // Security
            'security/detect-object-injection': 'off',
            'security/detect-non-literal-regexp': 'warn',
            'security/detect-possible-timing-attacks': 'warn',
            'security/detect-unsafe-regex': 'error',

            // Node
            'n/no-missing-import': 'off',
            'n/no-unpublished-import': 'off',

            // General
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
            'no-unused-vars': 'off',
            'max-len': 'off',
            complexity: ['error', 10],

            // Astro-specific rules
            'astro/no-set-html-directive': 'error',
            'astro/no-set-text-directive': 'error',
            'astro/no-unused-css-selector': 'error',
            'astro/prefer-split-class-list': 'error',

            // Tailwind
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-custom-classname': 'off',

            // JSDoc
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-param-names': 'error',
            'jsdoc/check-tag-names': 'error',
            'jsdoc/check-types': 'error',
            'jsdoc/require-jsdoc': 'error',
            'jsdoc/require-param': 'error',
            'jsdoc/require-returns': 'error'
        }
    }
];
