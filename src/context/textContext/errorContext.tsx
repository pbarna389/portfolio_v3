import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export type ErrorContextValues = {
	error?: boolean
	setError?: Dispatch<SetStateAction<boolean>>
}

const intialErrorValues: ErrorContextValues = {}

export const ErrorContext = createContext<typeof intialErrorValues>(intialErrorValues)
