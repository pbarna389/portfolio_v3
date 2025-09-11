import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

import type { TextDataType } from '@types'

export type TextContextValues = {
	setTextData?: Dispatch<SetStateAction<TextDataType>>
	textData?: TextDataType
}

const initialTextValue: TextContextValues = {}

export const TextContext = createContext<typeof initialTextValue>(initialTextValue)
