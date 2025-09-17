import { useTextContext } from '@context'

import NavigationLink from './NavigationLink'

type NavigationProps = {
	desktopMode?: boolean
	open?: boolean
	setState?: () => void
}

export const Navigation = ({
	open = true,
	desktopMode = false,
	setState
}: NavigationProps) => {
	const {
		textData: { navLinks }
	} = useTextContext()

	return (
		<div
			className={`fixed gap-4 top-0 left-0 -z-1 scale-x-0 bg-darkBg/90 backdrop-blur-xs	${open && 'scale-x-100'} ${desktopMode && 'hidden z-1 sm:col-start-2 sm:col-end-3 sm:block sm:static sm:bg-transparent sm:backdrop-blur-none scale-x-0 sm:scale-x-100 sm:justify-self-center sm:whitespace-nowrap'}
				`}
		>
			<ul
				className={`flex flex-col gap-4 h-[105vh] w-[105vw] items-center justify-center	sm:flex-row sm:max-h-fit sm:max-w-fit text-darker-500`}
			>
				{navLinks?.length &&
					navLinks.map((el) => (
						<NavigationLink key={`navigation-${el}`} setState={setState} text={el} />
					))}
			</ul>
		</div>
	)
}
