import { use } from 'react'

import { FormStopwatchContext } from '../FormStopwatchContext'

export const useFormStopwatch = () => {
	const { statusText, timer, timerEnd } = use(FormStopwatchContext)

	if (!statusText) {
		throw new Error('statusText is used outside of FormStopWatchContext')
	}
	if (!timer) {
		throw new Error('timer is used outside of FormStopWatchContext')
	}
	if (!timerEnd) {
		throw new Error('timerEnd is used outside of FormStopWatchContext')
	}

	return { statusText, timer, timerEnd }
}
