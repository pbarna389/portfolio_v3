import { useMemo, useState } from 'react'

import { TEXT_STATE_BASEVALUE } from '@constants'
import type { FiresbaseDataType } from '@types'

import { ErrorContext } from './errorContext'
import { LoaderContext } from './loaderContext'
import { TextContext } from './textContext'

export const TextContextProvider = ({ children }: React.PropsWithChildren) => {
	const [textData, setTextData] = useState<FiresbaseDataType>(TEXT_STATE_BASEVALUE)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)

	const textContextValue = useMemo(() => {
		return { textData, setTextData }
	}, [textData])

	const loaderContextValue = useMemo(() => {
		return { loading, setLoading }
	}, [loading])

	const errorContextValue = useMemo(() => {
		return { error, setError }
	}, [error])

	return (
		<ErrorContext value={errorContextValue}>
			<LoaderContext value={loaderContextValue}>
				<TextContext value={textContextValue}>{children}</TextContext>
			</LoaderContext>
		</ErrorContext>
	)
}
