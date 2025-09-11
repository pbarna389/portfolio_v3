import { use } from 'react'

import { TextContext } from '../textContext'

export const useTextContext = () => {
	const { data, dispatch } = use(TextContext)

	if (!data || !dispatch) {
		throw new Error('useTextContext used outside of TextContextProvider')
	}

	return { data, dispatch }
}
