import { useState } from 'react'

export const usePopover = () => {
	const [hover, setHover] = useState<boolean>(false)

	const handleHover = () => {
		setHover((prev) => !prev)
	}

	return { hover, handleHover }
}
