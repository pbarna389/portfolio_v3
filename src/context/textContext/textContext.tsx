import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

import type { FiresbaseDataType } from '@types'

export type TextContextValues = {
	setTextData?: Dispatch<SetStateAction<FiresbaseDataType>>
	textData?: FiresbaseDataType
}

const initialTextValue: TextContextValues = {}

export const TextContext = createContext<typeof initialTextValue>(initialTextValue)
