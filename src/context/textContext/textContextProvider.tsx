import { useMemo, useState } from 'react'

import type { DocumentData } from 'firebase/firestore/lite'

import { TextContext } from './textContext'

export const TextContextProvider = ({ children }: React.PropsWithChildren) => {
	const [textData, setTextData] = useState<DocumentData[]>([])

	const textContextValue = useMemo(() => {
		return { data: textData, dispatch: setTextData }
	}, [textData])

	return <TextContext value={textContextValue}>{children}</TextContext>
}
