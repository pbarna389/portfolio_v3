import { db } from '@config'
import { collection, getDocs } from 'firebase/firestore/lite'

import { TEXT_STATE_BASEVALUE } from '@constants'
import type { FiresbaseDataType } from '@types'

export const getTextData = async () => {
	const textRef = collection(db, 'textData')
	const textData = await getDocs(textRef)
	const filteredData = textData.docs.map((doc) => doc.data())

	const dataObj = filteredData.reduce<FiresbaseDataType>((obj, curr) => {
		Object.entries(curr).forEach(([key, value]) => {
			obj[key] = Array.isArray(value) ? value.flat() : value
		})
		return obj
	}, TEXT_STATE_BASEVALUE)

	return dataObj
}
