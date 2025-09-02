import type { IconKeys } from '@types'

export const textConverter = (text: IconKeys) => {
	const result = text.replace(/(?<!^)([A-Z])/g, ' $1')

	return result
}
