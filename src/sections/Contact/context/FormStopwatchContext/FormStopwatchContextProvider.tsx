import { useMemo } from 'react'

import { FormStopwatchContext } from './FormStopwatchContext'

export const FormStopwatchContextProvider = ({ children }: React.PropsWithChildren) => {
	const value = useMemo(() => {
		return {}
	}, [])

	return <FormStopwatchContext value={value}>{children}</FormStopwatchContext>
}
