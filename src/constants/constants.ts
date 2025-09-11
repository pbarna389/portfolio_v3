import type { ConstantWithLinks } from '@types'

export const PROFILE_LINKS: ConstantWithLinks[] = [
	{
		name: 'github',
		link: 'https://github.com/pbarna389',
		highlightColor: 'gray'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/barnapapp-fe',
		highlightColor: 'blue'
	}
]

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
	}
}
