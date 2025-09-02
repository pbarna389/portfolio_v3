import type { PropsWithChildren } from 'react'

type LinkProps = PropsWithChildren & {
	href: `https://${string}` | `http://${string}`
	className?: string
	target?: string
}

export const Link = ({
	href,
	target = '_blank',
	className = '',
	children
}: LinkProps) => {
	return (
		<a
			className={`col-start-1 col-end-2 row-start-1 row-end-2 cursor-pointer ${className}
			`}
			target={target}
			href={href}
		>
			{children}
		</a>
	)
}
