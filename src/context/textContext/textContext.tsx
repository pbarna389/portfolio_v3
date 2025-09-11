import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

import type { DocumentData } from 'firebase/firestore/lite'

type TextContextValues = {
	data?: DocumentData[]
	dispatch?: Dispatch<SetStateAction<DocumentData[]>>
}

const initialTextValue: TextContextValues = {}

export const TextContext = createContext<TextContextValues>(initialTextValue)
