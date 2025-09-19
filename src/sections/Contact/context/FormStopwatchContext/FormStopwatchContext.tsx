import { createContext } from 'react'

type FormStopwatchInitialStateType = {
	statusText?: string
	timer?: number
	timerEnd?: number
}

const initialState: FormStopwatchInitialStateType = {}

export const FormStopwatchContext = createContext<typeof initialState>(initialState)
