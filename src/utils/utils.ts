export const textConverter = (text: string) => {
	const result = text.replace(/(?<!^)([A-Z])/g, ' $1')

	return result
}
