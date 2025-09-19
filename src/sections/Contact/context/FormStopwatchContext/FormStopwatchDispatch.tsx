import { createContext } from 'react'

import type { StopwatchAction } from './reducer'

type FormStopwatchDispatchInitialStateType = {
	dispatch?: React.ActionDispatch<[action: StopwatchAction]>
}

const initialState: FormStopwatchDispatchInitialStateType = {
	dispatch: () => {}
}

export const FormStopwatchDispatchContext =
	createContext<typeof initialState>(initialState)
