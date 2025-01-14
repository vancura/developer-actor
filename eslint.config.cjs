const astroPlugin = require('eslint-plugin-astro');
const eslint = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const nodePlugin = require('eslint-plugin-n');
const perfectionistPlugin = require('eslint-plugin-perfectionist');
const prettierConfig = require('eslint-config-prettier');
const promisePlugin = require('eslint-plugin-promise');
const regexPlugin = require('eslint-plugin-optimize-regex');
const securityPlugin = require('eslint-plugin-security');
const sonarjsPlugin = require('eslint-plugin-sonarjs');
const tailwindcssPlugin = require('eslint-plugin-tailwindcss');
const tseslintPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const astroParser = require('astro-eslint-parser');

module.exports = [
    // Ignores
    {
        ignores: [
            '.astro/**',
            '.git/**',
            '.vscode/**',
            '.yarn/**',
            '*.min.*',
            '**/*.json',
            '**/*.jsonc',
            '**/*.md',
            '**/*.mdx',
            '**/*.yaml',
            '**/*.yml',
            'build/**',
            'coverage/**',
            'dist/**',
            'node_modules/**',
            'public/**',
            'jsconfig.json',
            '.prettierrc.cjs',
            'eslint.config.cjs',
            'postcss.config.cjs',
            'tailwind.config.cjs',
            'astro.config.mjs',
            'src/env.d.ts'
        ]
    },

    // Base configuration
    {
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.json',
                extraFileExtensions: ['.astro', '.mdx']
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
            n: nodePlugin,
            'optimize-regex': regexPlugin,
            perfectionist: perfectionistPlugin
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.ts', '.mjs', '.astro', '.md']
                }
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.mjs']
            }
        },
        rules: {
            // Base configurations
            ...eslint.configs.recommended.rules,
            ...tseslintPlugin.configs.recommended.rules,
            ...tseslintPlugin.configs['recommended-requiring-type-checking'].rules,
            ...tseslintPlugin.configs.strict.rules,
            ...astroPlugin.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,

            // Apify TypeScript rules (from @apify/eslint-config-ts)
            'no-unused-vars': 'off',
            'import/extensions': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-extra-semi': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            '@typescript-eslint/no-non-null-assertion': 'off',
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',
            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'error',
            'space-before-function-paren': 'off',
            '@typescript-eslint/space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always'
                }
            ],
            'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: {
                        arguments: false,
                        attributes: false
                    }
                }
            ],
            '@typescript-eslint/promise-function-async': 'error',

            // Plugin recommended rules
            ...promisePlugin.configs.recommended.rules,
            ...sonarjsPlugin.configs.recommended.rules,
            ...securityPlugin.configs.recommended.rules,
            ...nodePlugin.configs.recommended.rules,

            // General Rules
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
            'max-len': ['warn', { code: 120 }],
            complexity: ['error', { max: 10 }],

            // TypeScript Specific Rules
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',

            // SonarJS
            'sonarjs/cognitive-complexity': 'error',
            'sonarjs/no-duplicate-string': ['error', { threshold: 5 }],
            'sonarjs/no-identical-functions': 'error',
            'sonarjs/no-empty-function': 'off',
            'sonarjs/no-unused-expressions': 'off',

            // Promise
            'promise/always-return': 'error',
            'promise/no-return-wrap': 'error',
            'promise/param-names': 'error',
            'promise/catch-or-return': 'error',
            'promise/no-native': 'off',
            'promise/no-callback-in-promise': 'warn',

            // Import Rules
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off', // TypeScript handles module resolution
            'import/order': 'off', // Using perfectionist instead

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
            'optimize-regex/optimize-regex': 'warn',

            // Security
            'security/detect-object-injection': 'warn',
            'security/detect-non-literal-regexp': 'error',
            'security/detect-possible-timing-attacks': 'error',
            'security/detect-unsafe-regex': 'error',

            // Node
            'n/no-missing-import': 'off',
            'n/no-unpublished-import': 'error',

            // JSDoc
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-param-names': 'warn',
            'jsdoc/check-tag-names': 'warn',
            'jsdoc/check-types': 'warn',
            'jsdoc/require-jsdoc': 'warn',
            'jsdoc/require-param': 'warn',
            'jsdoc/require-returns': 'warn',

            // Tailwind
            'tailwindcss/classnames-order': 'error',
            'tailwindcss/no-custom-classname': 'off'
        }
    },

    // Astro Files Configuration
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: './tsconfig.json',
                extraFileExtensions: ['.astro']
            }
        },
        rules: {
            // Astro-specific rules
            'astro/no-set-html-directive': 'error',
            'astro/no-set-text-directive': 'error',
            'astro/no-unused-css-selector': 'error',
            'astro/prefer-split-class-list': 'error'
        }
    },

    // TypeScript and JavaScript Files Configuration
    {
        files: ['**/*.{js,ts,mjs,cjs}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd()
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    },

    // Prettier Configuration
    prettierConfig
];
