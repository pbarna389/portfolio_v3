import { useMemo, useState } from 'react'

import { useLocalStorage } from '@hooks'

import { FormStopwatchContext } from './FormStopwatchContext'
import { FormStopwatchSetterContext } from './FormStopwatchSetters'

type FormStopwatchContextProviderProps = React.PropsWithChildren & {
	storageKey: `${string}-${string}-${string}`
}

export const FormStopwatchContextProvider = ({
	children,
	storageKey
}: FormStopwatchContextProviderProps) => {
	const [statusText, setStatusText] = useState<string | null>(null)
	const [timer, setTimer] = useState<number | null>(0)
	const [timerEnd, { setItem, removeItem }] = useLocalStorage<number>(storageKey, setTimer)

	const stopwatchContextValue = useMemo(() => {
		return { statusText, timer, timerEnd }
	}, [statusText, timer, timerEnd])

	const stopwatchSetterContextValue = useMemo(() => {
		return {
			setStatusText,
			setTimer,
			setLocalStorageItem: setItem,
			removeLocalStorageItem: removeItem
		}
	}, [removeItem, setItem, setTimer, setStatusText])

	return (
		<FormStopwatchContext value={stopwatchContextValue}>
			<FormStopwatchSetterContext value={stopwatchSetterContextValue}>
				{children}
			</FormStopwatchSetterContext>
		</FormStopwatchContext>
	)
}
