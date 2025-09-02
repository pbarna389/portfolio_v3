import type { ConstantWithLinks } from '@types'

export const DEMONSTRATABLE_SKILLS: (ConstantWithLinks & {
	highlightColor: string
	progress: number
})[] = [
	{
		name: 'react',
		link: 'https://react.dev',
		progress: 75,
		highlightColor: 'white'
	},
	{
		name: 'typescript',
		link: 'https://www.typescriptlang.org',
		progress: 50,
		highlightColor: 'sky'
	},
	{
		name: 'javascript',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		progress: 50,
		highlightColor: 'yellow'
	},
	{
		name: 'html',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		progress: 50,
		highlightColor: 'orange'
	},
	{
		name: 'css',
		link:
			'https://developer.https://developer.mozilla.org/en-US/docs/Web/CSS.org/en-US/docs/Web/HTML',
		progress: 50,
		highlightColor: 'blue'
	},
	{
		name: 'tailwind',
		link: 'https://tailwindcss.com',
		progress: 50,
		highlightColor: 'orange'
	},
	{
		name: 'strapi',
		link: 'https://strapi.io',
		progress: 50,
		highlightColor: 'blue'
	},
	{
		name: 'tanstackQuery',
		link: 'https://tanstack.com/query/latest',
		progress: 50,
		highlightColor: 'red'
	},
	{
		name: 'reduxToolkit',
		link: 'https://redux-toolkit.js.org',
		progress: 50,
		highlightColor: 'purple'
	},
	{
		name: 'graphql',
		link: 'https://graphql.org',
		progress: 50,
		highlightColor: 'blue'
	},
	{
		name: 'reactRouter',
		link: 'https://reactrouter.com',
		progress: 50,
		highlightColor: 'blue'
	},
	{
		name: 'nextjs',
		link: 'https://nextjs.org',
		progress: 50,
		highlightColor: 'black'
	}
]
