import { useMemo, useReducer } from 'react'

import { useLocalStorage } from '@hooks'

import { FormStopwatchContext } from './FormStopwatchContext'
import { FormStopwatchDispatchContext } from './FormStopwatchDispatch'
import { FormStopwatchSetterContext } from './FormStopwatchSetters'
import { initialState, stopwatchReducer } from './reducer'

type FormStopwatchContextProviderProps = React.PropsWithChildren & {
	storageKey: `${string}-${string}-${string}`
}

export const FormStopwatchContextProvider = ({
	children,
	storageKey
}: FormStopwatchContextProviderProps) => {
	const [state, dispatch] = useReducer(stopwatchReducer, initialState)
	const [timerEnd, { setItem, removeItem }] = useLocalStorage<number>(storageKey, dispatch)

	const stopwatchContextValue = useMemo(() => {
		return { statusText: state.statusText, timer: state.timer, timerEnd }
	}, [state, timerEnd])

	const stopwatchSetterContextValue = useMemo(() => {
		return {
			setLocalStorageItem: setItem,
			removeLocalStorageItem: removeItem
		}
	}, [removeItem, setItem])

	const stopwatchDispatchContextValue = useMemo(() => {
		return { dispatch }
	}, [dispatch])

	return (
		<FormStopwatchDispatchContext value={stopwatchDispatchContextValue}>
			<FormStopwatchContext value={stopwatchContextValue}>
				<FormStopwatchSetterContext value={stopwatchSetterContextValue}>
					{children}
				</FormStopwatchSetterContext>
			</FormStopwatchContext>
		</FormStopwatchDispatchContext>
	)
}
