import { useMemo, useState } from 'react'

import { TEXT_STATE_BASEVALUE } from '@constants'
import type { FiresbaseDataType } from '@types'

import { LoaderContext } from './loaderContext'
import { TextContext } from './textContext'

export const TextContextProvider = ({ children }: React.PropsWithChildren) => {
	const [textData, setTextData] = useState<FiresbaseDataType>(TEXT_STATE_BASEVALUE)
	const [loading, setLoading] = useState<boolean>(true)

	const textContextValue = useMemo(() => {
		return { textData, setTextData }
	}, [textData])

	const loaderContextValue = useMemo(() => {
		return { loading, setLoading }
	}, [loading])

	return (
		<LoaderContext value={loaderContextValue}>
			<TextContext value={textContextValue}>{children}</TextContext>
		</LoaderContext>
	)
}
