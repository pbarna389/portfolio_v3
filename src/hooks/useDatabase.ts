import { useEffect } from 'react'

import { useLoaderContext } from '@context'
import { useTextContext } from '@context'

import { getTextData } from './utils'

export const useDatabase = () => {
	const { setTextData } = useTextContext()
	const { setLoading } = useLoaderContext()

	useEffect(() => {
		const getData = async () => {
			const data = await getTextData()

			setTextData(data)
			setLoading(false)
		}
		const timeout = setTimeout(() => {
			getData()
		}, 1000)

		return () => clearTimeout(timeout)
	}, [setTextData, setLoading])
}
