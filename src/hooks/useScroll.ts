import { useEffect, useState } from 'react'

export const useScroll = () => {
	const [visible, setVisible] = useState<boolean>(false)
	useEffect(() => {
		const callback = () => {
			setVisible(window.scrollY > 0)
		}

		window.addEventListener('scroll', callback)

		return () => window.removeEventListener('scroll', callback)
	})

	return visible
}
