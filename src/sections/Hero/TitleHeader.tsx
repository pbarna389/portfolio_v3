import { useTextContext } from '@context'

export const TitleHeader = () => {
	const {
		textData: { hero }
	} = useTextContext()

	return (
		<>
			<h3 className="font-semibold text-md text-darker-700 sm:text-lg md:text-xl">
				{hero.header3}
			</h3>
			<h2 className="font-bold text-xl text-darker-500 sm:text-xl md:text-2xl">
				{hero.header2}
			</h2>
			<h1 className="inline-block text-4xl leading-12 text-center text-transparent font-bold mt-8 mb-8  bg-gradient-to-r from-darker-900 via-highlight to-darker-900 bg-clip-text sm:text-start sm:text-[70px]">
				{hero.header1}
			</h1>
		</>
	)
}
