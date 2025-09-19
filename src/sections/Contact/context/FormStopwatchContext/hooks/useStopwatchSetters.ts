import { use } from 'react'

import { FormStopwatchSetterContext } from '../FormStopwatchSetters'

export const useStopwatchSetters = () => {
	const { setLocalStorageItem, removeLocalStorageItem } = use(FormStopwatchSetterContext)

	if (!setLocalStorageItem) {
		throw new Error('setLocalStorageItem is used outside of FormStopWatchContextProvider')
	}
	if (!removeLocalStorageItem) {
		throw new Error(
			'removeLocalStorageItem is used outside of FormStopWatchContextProvider'
		)
	}

	return { setLocalStorageItem, removeLocalStorageItem }
}
