export const textConverter = (text: string) => {
	console.log(text)
	const result = text.replace(/(?<!^)([A-Z])/g, ' $1')
	console.log(result)

	return result
}
