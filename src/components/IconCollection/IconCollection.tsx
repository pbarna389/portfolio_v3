import { useMemo } from 'react'

import { IconContext } from 'react-icons'

import { Link } from '@components'
import type { HrefTypes, IconKeys } from '@types'

import { Icon } from './Icon'

type IconCollectionProps = {
	arrayToCreateFrom: {
		link: Exclude<HrefTypes, `#${string}`>
		name: IconKeys
	}[]
	color: `#${string}`
	size: number
}

export const IconCollection = ({
	color,
	size,
	arrayToCreateFrom
}: IconCollectionProps) => {
	const value = useMemo(() => {
		return { color, size: size.toString() }
	}, [color, size])

	return (
		<div className="flex flex-row gap-2 mb-8 justify-center items-center w-full sm:justify-start sm:items-start">
			<IconContext value={value}>
				{arrayToCreateFrom.map((el) => (
					<Link
						key={`icon-${el.name}`}
						href={el.link}
						className="*:hover:text-white flex items-center justify-center p-2 border-1 border-darker-700 bg-white/4 rounded-full h-8 w-8"
					>
						<Icon name={el.name} />
					</Link>
				))}
			</IconContext>
		</div>
	)
}
