import { use } from 'react'

import { FormStopwatchContext } from '../FormStopwatchContext'

export const useFormStopwatch = () => {
	const { statusText, timer, timerEnd } = use(FormStopwatchContext)

	if (statusText === undefined) {
		throw new Error('statusText is used outside of FormStopWatchContextProvider')
	}
	if (timer === undefined) {
		throw new Error('timer is used outside of FormStopWatchContextProvider')
	}
	if (timerEnd === undefined) {
		throw new Error('timerEnd is used outside of FormStopWatchContextProvider')
	}

	return { statusText, timer, timerEnd }
}
