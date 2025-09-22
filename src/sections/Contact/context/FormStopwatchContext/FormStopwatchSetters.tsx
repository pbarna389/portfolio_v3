import { createContext } from 'react'

type FormStopwatchSetterInitialStateType = {
	removeLocalStorageItem?: () => void | null
	setLocalStorageItem?: (
		starterValue: number,
		endValue: {
			expireTime: number
		}
	) => void | null
}

const initialState: FormStopwatchSetterInitialStateType = {}

export const FormStopwatchSetterContext = createContext<typeof initialState>(initialState)
