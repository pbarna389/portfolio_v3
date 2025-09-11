import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export type LoadingContextValues = {
	loading?: boolean
	setLoading?: Dispatch<SetStateAction<boolean>>
}

const initialLoadingValues: LoadingContextValues = {}

export const LoaderContext =
	createContext<typeof initialLoadingValues>(initialLoadingValues)
