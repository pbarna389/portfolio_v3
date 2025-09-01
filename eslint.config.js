import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintJs from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'

import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default tseslint
	.config(
		{ ignores: ['dist'] },
		{
			extends: [
				js.configs.recommended,
				eslintJs.configs.recommended,
				eslintReact.configs.recommended,
				...tseslint.configs.recommended
			],
			files: ['**/*.{ts,tsx}'],
			languageOptions: {
				parser: tseslint.parser,
				parserOptions: {
					projectService: true
				},
				ecmaVersion: 2020,
				globals: globals.browser
			},
			plugins: {
				'react-hooks': reactHooks,
				'react-refresh': reactRefresh,
				'simple-import-sort': simpleImportSort,
				'better-tailwindcss': eslintPluginBetterTailwindcss
			},
			rules: {
				...eslintPluginBetterTailwindcss.configs['stylistic-warn'].rules,
				...reactHooks.configs.recommended.rules,
				semi: ['error', 'never'],
				'better-tailwindcss/enforce-consistent-line-wrapping': [
					'warn',
					{
						indent: 'tab',
						lineBreakStyle: 'windows',
						classesPerLine: 2,
						group: 'newLine'
					}
				],
				'@typescript-eslint/semi': ['error', 'never'],
				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
				'@typescript-eslint/no-throw-literal': 0,
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/no-unused-vars': 'warn',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'function',
						format: ['camelCase', 'PascalCase']
					}
				],
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/array-type': 'error',
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/method-signature-style': 'error',
				'@typescript-eslint/max-params': 'error',
				'@typescript-eslint/dot-notation': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'@typescript-eslint/prefer-find': 'warn',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-literal-enum-member': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

				'@typescript-eslint/consistent-type-imports': [
					'error',
					{
						prefer: 'type-imports'
					}
				],
				'@typescript-eslint/member-ordering': [
					'warn',
					{
						default: {
							memberTypes: ['field', 'signature', 'constructor', 'method'],
							order: 'alphabetically-case-insensitive',
							optionalityOrder: 'required-first'
						}
					}
				],
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksVoidReturn: {
							attributes: false
						}
					}
				],
				'@eslint-react/dom/no-unsafe-iframe-sandbox': 0,
				'react-hooks/exhaustive-deps': 'warn',
				'react-hooks/rules-of-hooks': 'error',
				'object-shorthand': 'error',
				'prefer-spread': 'error',
				'prefer-template': 'warn',
				'prefer-rest-params': 'error',
				'prefer-destructuring': [
					'error',
					{
						array: false,
						object: true
					}
				],
				'no-var': 'error',
				'no-eval': 'error',
				'no-implied-eval': 'error',
				'no-console': 'warn',
				'no-useless-return': 'error',
				'no-nested-ternary': 'error',
				'no-else-return': 'error',
				'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
				'default-case': 'error',
				'default-case-last': 'error',
				'default-param-last': 'error',
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							['^import\\s+type\\s+.*'],
							// Built-in imports
							[
								'^react',
								'^react-dom',
								'^react-router',
								'^react-router-dom',
								'^react-dom/client'
							],
							// External libraries and packages
							[
								'^@reduxjs',
								'^@tanstack',
								'^styled-components',
								'^react-.*',
								'^swiper',
								'^formik',
								'^react-hook-form',
								'@hookform/*',
								'^@react-oauth',
								'^@react-icons'
							],
							['^@*'],
							// Internal project imports (anything prefixed with @)
							[
								'^@query',
								'^@services',
								'^@store',
								'^@slices',
								'^@context',
								'^@reducers',
								'^@layout',
								'^@pages',
								'^@components',
								'^@hooks',
								'^@helpers',
								'^@utils',
								'^@constants',
								'^@types'
							],
							[
								'^./query',
								'^./services',
								'^./store',
								'^./slices',
								'^./context',
								'^./reducers',
								'^./components',
								'^./pages',
								'^./hooks',
								'^./helpers',
								'^./utils',
								'^./constants',
								'^./types'
							],

							// Sibling imports (imports that start with './' or '../')
							['^\\./', '^\\../'],

							['^@storybook', '^@assets', '^./assets/*', '^.*\\.svg$'],

							// Type imports (files ending with .ts, .tsx)
							['^.*\\.(ts|tsx)$'],

							// Object imports (CSS/SCSS, assets, etc.)
							['^.*\\.(css|scss)$']
						]
					}
				],
				// Sorting exports (if necessary)
				'simple-import-sort/exports': 'error'
			},
			settings: {
				'better-tailwindcss': {
					// tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
					entryPoint: 'src/index.css',
					// tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
					tailwindConfig: 'tailwind.config.js'
				}
			}
		}
	)
	.concat(eslintPluginPrettier)
