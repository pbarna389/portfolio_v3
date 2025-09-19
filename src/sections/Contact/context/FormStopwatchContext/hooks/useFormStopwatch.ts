import { use } from 'react'

import { FormStopwatchContext } from '../FormStopwatchContext'

export const useFormStopwatch = () => {
	const { statusText, timerStart, timerEnd } = use(FormStopwatchContext)

	if (statusText === undefined) {
		throw new Error('statusText is used outside of FormStopWatchContextProvider')
	}
	if (timerStart === undefined) {
		throw new Error('timerStart is used outside of FormStopWatchContextProvider')
	}
	if (timerEnd === undefined) {
		throw new Error('timerEnd is used outside of FormStopWatchContextProvider')
	}

	return { statusText, timerStart, timerEnd }
}
