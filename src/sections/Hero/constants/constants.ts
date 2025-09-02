import type { HrefTypes, IconKeys } from '@types'

export const PROFILE_LINKS: {
	link: Exclude<HrefTypes, `#${string}`>
	name: IconKeys
}[] = [
	{
		name: 'github',
		link: 'https://github.com/pbarna389'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/barnapapp-fe'
	}
]
