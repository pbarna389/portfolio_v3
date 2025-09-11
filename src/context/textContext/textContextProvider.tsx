import { useMemo, useState } from 'react'

import type { TextDataType } from '@types'

import { LoaderContext } from './loaderContext'
import { TextContext } from './textContext'

export const TextContextProvider = ({ children }: React.PropsWithChildren) => {
	const [textData, setTextData] = useState<TextDataType>({ navLinks: [] })
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
