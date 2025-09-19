import { createContext } from 'react'

type FormStopwatchSetterInitialStateType = {
	removeLocalStorageItem?: () => void
	setLocalStorageItem?: (starterValue: string) => void
	setStatusText?: React.Dispatch<React.SetStateAction<string | undefined>>
}

const initialState: FormStopwatchSetterInitialStateType = {}

export const FormStopwatchSetterContext = createContext<typeof initialState>(initialState)
