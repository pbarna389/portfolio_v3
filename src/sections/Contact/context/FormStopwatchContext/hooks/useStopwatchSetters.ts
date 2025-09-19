import { use } from 'react'

import { FormStopwatchSetterContext } from '../FormStopwatchSetters'

export const useStopwatchSetters = () => {
	const { setStatusText, setLocalStorageItem, removeLocalStorageItem } = use(
		FormStopwatchSetterContext
	)

	if (!setStatusText) {
		throw new Error('setStatusText is used outside of FormStopWatchContext')
	}
	if (!setLocalStorageItem) {
		throw new Error('setLocalStorageItem is used outside of FormStopWatchContext')
	}
	if (!removeLocalStorageItem) {
		throw new Error('removeLocalStorageItem is used outside of FormStopWatchContext')
	}

	return { setStatusText, setLocalStorageItem, removeLocalStorageItem }
}
