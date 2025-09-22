import { Icon, Popover } from '@components'
import { usePopover } from '@hooks'

export const DBErrorIndicator = () => {
	const {
		hover,
		handlers: { handleEnter, handleLeave, handleClick }
	} = usePopover()

	return (
		<div
			className="fixed top-12 left-0.5 col-start-2 col-end-3 sm:top-2 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-1 z-1"
			onPointerEnter={handleEnter}
			onPointerLeave={handleLeave}
			onClick={handleClick}
		>
			<Popover
				className="absolute w-50 top-4 -left-5 p-1 transform:-translate-x-1/2 transform:translate-y-1/2 text-center font-bold text-xl text-red-800 border-red-800 bg-darker-900 border-2 rounded"
				hover={hover}
			>
				Some error happened at Firebase, the site maybe missing some data
			</Popover>
			<Icon name="error" className="text-red-800 text-3xl" />
		</div>
	)
}
