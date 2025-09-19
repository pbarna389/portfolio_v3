import { createContext } from 'react'

import type { StopwatchAction } from './reducer'

type FormStopwatchDispatchInitialStateType<T extends number> = {
	dispatch?: React.ActionDispatch<[action: StopwatchAction<T>]>
}

const initialState: FormStopwatchDispatchInitialStateType<number> = {
	dispatch: () => {}
}

export const FormStopwatchDispatchContext =
	createContext<typeof initialState>(initialState)
