import { useEffect } from 'react'

import { useErrorContext, useLoaderContext, useTextContext } from '@context'
import type { FiresbaseDataType } from '@types'

import { getTextData } from './utils'

import { useLocalStorage } from './useLocalStorage'
type FireBaseLocalStorageType = {
	expireTime: number
	fireData: FiresbaseDataType
}

export const useDatabase = () => {
	const { setTextData } = useTextContext()
	const { setLoading } = useLoaderContext()
	const { setError } = useErrorContext()
	const [dbValue, { setItem }] = useLocalStorage<FireBaseLocalStorageType>('firebase-data')

	useEffect(() => {
		const getData = async () => {
			try {
				const { fireData, expireTime } = dbValue ? dbValue : { fireData: null, expireTime: 0 }
				const currentTime = Date.now()

				const shouldUpdateData = !fireData || expireTime < currentTime

				const data = shouldUpdateData ? await getTextData() : fireData
				if (shouldUpdateData) {
					const lsData = {
						fireData: data,
						expireTime: currentTime + 60 * 60 * 1000 * 6
					}

					setItem(0, lsData)
				}

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
	}, [setTextData, setLoading, setError, dbValue, setItem])
}

/*1758576726233 */
/*1758576726233 */
