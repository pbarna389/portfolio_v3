import { createContext } from 'react'

type FormStopwatchSetterInitialStateType = {
	removeLocalStorageItem?: () => void | null
	setLocalStorageItem?: (starterValue: number) => void | null
	setStatusText?: React.Dispatch<React.SetStateAction<string | null>> | null
	setTimer?: React.Dispatch<React.SetStateAction<number | null>> | null
}

const initialState: FormStopwatchSetterInitialStateType = {}

export const FormStopwatchSetterContext = createContext<typeof initialState>(initialState)
