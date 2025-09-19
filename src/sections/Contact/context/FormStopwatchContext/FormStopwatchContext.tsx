import { createContext } from 'react'

type FormStopwatchInitialStateType = {
	statusText?: string | null
	timer?: number | null
	timerEnd?: number | null
}

const initialState: FormStopwatchInitialStateType = {}

export const FormStopwatchContext = createContext<typeof initialState>(initialState)
