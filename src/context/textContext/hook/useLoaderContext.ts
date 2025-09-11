/* eslint-disable @eslint-react/no-use-context */
import { useContext } from 'react'

import { LoaderContext } from '../loaderContext'

export const useLoaderContext = () => {
	const { loading, setLoading } = useContext(LoaderContext)

	if (loading === undefined) {
		throw new Error('loading used outside of TextContextProvider')
	}

	if (!setLoading) {
		throw new Error('setLoading used outside of TextContextProvider')
	}

	return { loading, setLoading }
}
