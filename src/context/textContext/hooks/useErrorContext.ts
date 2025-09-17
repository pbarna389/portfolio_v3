import { use } from 'react'

import { ErrorContext } from '../errorContext'

export const useErrorContext = () => {
	const { error, setError } = use(ErrorContext)

	if (error === undefined) {
		throw new Error('error used outside of TextContextProvider')
	}

	if (!setError) {
		throw new Error('setError used outside of TextContextProvider')
	}

	return { error, setError }
}
