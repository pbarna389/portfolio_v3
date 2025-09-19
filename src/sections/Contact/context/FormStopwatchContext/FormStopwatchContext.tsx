import { createContext } from 'react'

const initialState = {}

export const FormStopwatchContext = createContext<typeof initialState>(initialState)
