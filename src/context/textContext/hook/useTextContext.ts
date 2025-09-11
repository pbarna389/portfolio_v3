import { use } from 'react'

import { TextContext } from '../textContext'

export const useTextContext = () => {
	const { textData, setTextData } = use(TextContext)

	if (!textData) {
		throw new Error('textData used outside of TextContextProvider')
	}
	if (!setTextData) {
		throw new Error('setTextData used outside of TextContextProvider')
	}

	return { textData, setTextData }
}
