import type { PropsWithChildren } from 'react'

import type { HrefTypes } from '@types'

type LinkProps = PropsWithChildren & {
	href: HrefTypes
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
			aria-label={`Link to: ${href}`}
		>
			{children}
		</a>
	)
}
