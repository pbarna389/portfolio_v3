import { useState } from 'react'

export const usePopover = () => {
	const [hover, setHover] = useState<boolean>(false)

	const handleEnter = (e: React.PointerEvent) => {
		if (e.pointerType !== 'touch') setHover(true)
	}

	const handleLeave = (e: React.PointerEvent) => {
		if (e.pointerType !== 'touch') setHover(false)
	}

	const handleClick = (e: React.PointerEvent<HTMLDivElement>) => {
		if (e.pointerType === 'touch' || 'ontouchstart' in window) {
			setHover((prev) => !prev)
		}
	}

	return { hover, handlers: { handleEnter, handleLeave, handleClick } }
}
