export type IconKeys =
	| 'github'
	| 'linkedin'
	| 'download'
	| 'react'
	| 'javascript'
	| 'typescript'
	| 'html'
	| 'css'
	| 'tailwind'
	| 'strapi'
	| 'tanQuery'
	| 'redux'
	| 'graphql'
	| 'reactRouter'

export type IconsType<Key extends string> = {
	[Property in Key]: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type HrefTypes = `https://${string}` | `http://${string}` | `#${string}`
