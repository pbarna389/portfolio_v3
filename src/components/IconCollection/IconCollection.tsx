import { useMemo } from 'react'

import { IconContext } from 'react-icons'

import { Link } from '@components'

import { Icon } from './Icon'

export const IconCollection = () => {
	const value = useMemo(() => {
		return { color: '#959595', size: '20' }
	}, [])

	return (
		<div className="flex flex-row gap-2 mt-2 justify-center items-center w-full sm:justify-start sm:items-start">
			<IconContext value={value}>
				<Link
					href="http://localhost:5173"
					className="*:hover:text-white flex items-center justify-center p-2 border-1 border-darker-700 bg-white/4 rounded-full h-8 w-8"
				>
					<Icon name="github" />
				</Link>
				<Link
					href="http://localhost:5173"
					className="*:hover:text-white flex items-center justify-center p-2 border-1 border-darker-700 bg-white/4 rounded-full h-8 w-8"
				>
					<Icon name="linkedin" />
				</Link>
			</IconContext>
		</div>
	)
}
