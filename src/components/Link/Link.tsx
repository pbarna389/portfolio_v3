import type { PropsWithChildren } from 'react'

type LinkProps = PropsWithChildren & {
	href: `https://${string}` | `http://${string}`
	target?: string
}

export const Link = ({ href, target = '_blank', children }: LinkProps) => {
	return (
		<a
			className={`col-start-1 col-end-2 row-start-1 row-end-2 cursor-pointer justify-self-start rounded-sm bg-highlight pt-[calc(0.5rem-2px)] pr-[calc(1rem-4px)]	pb-[calc(0.5rem-2px)] pl-[calc(1rem-4px)] text-center	text-[14px]	sm:col-start-3 sm:col-end-4 sm:justify-self-end sm:text-sm
			`}
			target={target}
			href={href}
		>
			{children}
		</a>
	)
}
