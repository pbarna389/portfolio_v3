import { useEffect, useRef, useState } from 'react'

type UseIntersectionOptions = {
	shouldFreeze?: boolean
}

export const useIntersectionObserver = ({
	shouldFreeze = false
}: UseIntersectionOptions = {}) => {
	const [inView, setInView] = useState<boolean>(false)

	const ref: React.RefObject<HTMLElement | null> = useRef(null)

	const frozen = shouldFreeze && inView
	useEffect(() => {
		if (!ref || !('IntersectionObserver' in window)) return

		const observerCb = (entries: IntersectionObserverEntry[]) => {
			const [{ isIntersecting }] = entries

			setInView(isIntersecting)
		}

		const { current } = ref

		const observer = new IntersectionObserver(observerCb)

		if (current) {
			observer.observe(current)
		}

		if (frozen && current) {
			observer.unobserve(current)

			return
		}

		return () => observer.disconnect()
	})

	return { ref, inView }
}
