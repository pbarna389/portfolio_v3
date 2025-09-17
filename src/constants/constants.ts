import type { FiresbaseDataType } from '@types'

export const TEXT_STATE_BASEVALUE = {
	navLinks: [],
	aboutMe: {
		heading: '',
		text: ''
	},
	hero: {
		header1: '',
		header2: '',
		header3: ''
	},
	profileLinks: [],
	contacts: [],
	skills: []
}

export const FALLBACK_STATE: FiresbaseDataType = {
	navLinks: ['about me', 'skills', 'portfolio', 'contact me'],
	aboutMe: {
		heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		text:
			'Hi, I’m Barnabás – a Frontend Developer with a passion for building web applications that are not only functional but also enjoyable to use. Over the past two years, I’ve worked mainly with React, TypeScript creating responsive and reliable interfaces.'
	},
	hero: {
		header1: 'Frontend Developer',
		header2: 'Barnabás Papp',
		header3: 'Hi, I am'
	},
	profileLinks: [
		{ highlightColor: 'gray', link: 'https://github.com/pbarna389', name: 'github' },
		{
			highlightColor: 'blue',
			link: 'https://www.linkedin.com/in/barnapapp-fe',
			name: 'linkedin'
		}
	],
	contacts: [
		{ hrefPrefix: 'tel:', name: 'telephone', text: '+36-70/625-34-15' },
		{ hrefPrefix: 'mailto:', name: 'mail', text: 'pbarna389@gmail.com' }
	],
	skills: [
		{
			name: 'react',
			link: 'https://react.dev',
			progress: 2,
			highlightColor: 'white'
		},
		{
			name: 'typescript',
			link: 'https://www.typescriptlang.org',
			progress: 1,
			highlightColor: 'sky'
		},
		{
			name: 'javascript',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			progress: 1,
			highlightColor: 'yellow'
		},
		{
			name: 'html',
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			progress: 1,
			highlightColor: 'orange'
		},
		{
			name: 'css',
			link:
				'https://developer.https://developer.mozilla.org/en-US/docs/Web/CSS.org/en-US/docs/Web/HTML',
			progress: 1,
			highlightColor: 'blue'
		},
		{
			name: 'tailwind',
			link: 'https://tailwindcss.com',
			progress: 1,
			highlightColor: 'orange'
		},
		{
			name: 'strapi',
			link: 'https://strapi.io',
			progress: 1,
			highlightColor: 'blue'
		},
		{
			name: 'tanstackQuery',
			link: 'https://tanstack.com/query/latest',
			progress: 1,
			highlightColor: 'red'
		},
		{
			name: 'reduxToolkit',
			link: 'https://redux-toolkit.js.org',
			progress: 1,
			highlightColor: 'purple'
		},
		{
			name: 'graphql',
			link: 'https://graphql.org',
			progress: 1,
			highlightColor: 'blue'
		},
		{
			name: 'reactRouter',
			link: 'https://reactrouter.com',
			progress: 1,
			highlightColor: 'blue'
		},
		{
			name: 'nextjs',
			link: 'https://nextjs.org',
			progress: 1,
			highlightColor: 'black'
		}
	]
}
