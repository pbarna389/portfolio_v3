import { use } from 'react'

import { FormStopwatchSetterContext } from '../FormStopwatchSetters'

export const useStopwatchSetters = () => {
	const { setStatusText, setLocalStorageItem, removeLocalStorageItem, setTimer } = use(
		FormStopwatchSetterContext
	)

	if (!setStatusText) {
		throw new Error('setStatusText is used outside of FormStopWatchContextProvider')
	}
	if (!setTimer) {
		throw new Error('setTimer is used outside of FormStopWatchContextProvider')
	}
	if (!setLocalStorageItem) {
		throw new Error('setLocalStorageItem is used outside of FormStopWatchContextProvider')
	}
	if (!removeLocalStorageItem) {
		throw new Error(
			'removeLocalStorageItem is used outside of FormStopWatchContextProvider'
		)
	}

	return { setStatusText, setLocalStorageItem, removeLocalStorageItem, setTimer }
}
