import { createContext } from 'react'

type FormStopwatchInitialStateType = {
	statusText?: string | null
	timerEnd?: number | null
	timerStart?: number | null
}

const initialState: FormStopwatchInitialStateType = {}

export const FormStopwatchContext = createContext<typeof initialState>(initialState)
