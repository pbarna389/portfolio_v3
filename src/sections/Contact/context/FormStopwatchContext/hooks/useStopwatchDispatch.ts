import { use } from 'react'

import { FormStopwatchDispatchContext } from '../FormStopwatchDispatch'

export const useStopwatchDispatch = () => {
	const { dispatch } = use(FormStopwatchDispatchContext)

	if (!dispatch) {
		throw new Error('dispatch is used outside of FormStopWatchContextProvider')
	}

	return { dispatch }
}
