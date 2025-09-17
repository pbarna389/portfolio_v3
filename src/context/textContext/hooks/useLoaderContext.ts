import { use } from 'react'

import { LoaderContext } from '../loaderContext'

export const useLoaderContext = () => {
	const { loading, setLoading } = use(LoaderContext)

	if (loading === undefined) {
		throw new Error('loading used outside of TextContextProvider')
	}

	if (!setLoading) {
		throw new Error('setLoading used outside of TextContextProvider')
	}

	return { loading, setLoading }
}
