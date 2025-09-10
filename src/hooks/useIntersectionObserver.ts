import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = () => {
	const [inView, setInView] = useState<boolean>(false)
	const ref: React.RefObject<HTMLElement | null> = useRef(null)

	useEffect(() => {
		const observerCb = (entries: IntersectionObserverEntry[]) => {
			const [{ isIntersecting }] = entries

			setInView(isIntersecting)
		}

		const { current } = ref

		const observer = new IntersectionObserver(observerCb)

		if (current) {
			observer.observe(current)
		}
	})

	return { ref, inView }
}
