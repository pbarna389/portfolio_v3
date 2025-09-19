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
	const [statusText, setStatusText] = useState<string | undefined>()
	const [timer, setTimer] = useState<number | undefined>()
	const [timerEnd, { setItem, removeItem }] = useLocalStorage<number>(storageKey, setTimer)

	const stopwatchContextValue = useMemo(() => {
		return { statusText, timer, timerEnd }
	}, [statusText, timer, timerEnd])

	const stopwatchSetterContextValue = useMemo(() => {
		return { setStatusText, setItem, removeItem }
	}, [removeItem, setItem, setStatusText])

	return (
		<FormStopwatchSetterContext value={stopwatchSetterContextValue}>
			<FormStopwatchContext value={stopwatchContextValue}>{children}</FormStopwatchContext>
		</FormStopwatchSetterContext>
	)
}
