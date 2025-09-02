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
	| 'tanstackQuery'
	| 'reduxToolkit'
	| 'graphql'
	| 'reactRouter'
	| 'nextjs'

export type IconsType<Key extends string> = {
	[Property in Key]: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type HrefTypes = `https://${string}` | `http://${string}` | `#${string}`

export type ConstantWithLinks = {
	highlightColor: string
	link: Exclude<HrefTypes, `#${string}`>
	name: IconKeys
}
