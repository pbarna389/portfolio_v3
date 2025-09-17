import { useEffect } from 'react'

import { useErrorContext, useLoaderContext, useTextContext } from '@context'

import { getTextData } from './utils'

export const useDatabase = () => {
	const { setTextData } = useTextContext()
	const { setLoading } = useLoaderContext()
	const { setError } = useErrorContext()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getTextData()

				setTextData(data)
				setLoading(false)
			} catch (err) {
				if (err) {
					setError(true)
					setLoading(false)
				}
			}
		}

		const timeout = setTimeout(() => {
			getData()
		}, 1000)

		return () => clearTimeout(timeout)
	}, [setTextData, setLoading, setError])
}
