import { IconCollection, Link } from '@components'

import { Background } from './Background'

export const Title = () => {
	return (
		<div className="basis-1/2 flex flex-col relative gap-1 justify-center items-center sm:items-start border-2 border-white p-4">
			<Background />
			<h3 className="font-semibold text-md text-darker-700 sm:text-lg">Hi, I am</h3>
			<h2 className="font-bold text-lg text-darker-500 sm:text-xl">Barnabás Papp</h2>
			<h1 className="inline-block text-[60px] leading-12 text-center text-transparent font-bold mt-3 bg-gradient-to-r from-darker-700 via-highlight to-darker-700 bg-clip-text sm:text-start sm:text-[70px]">
				Frontend Developer
			</h1>
			<IconCollection />
			<div className="flex flex-row gap-2 mt-2">
				<Link
					href="http://localhost:5173"
					className="bg-highlight text-center text-[14px] pt-1 pb-1 pl-6 pr-6 rounded-sm"
				>
					Hire me
				</Link>
				<Link href="http://localhost:5173" />
				<Link
					href="http://localhost:5173"
					className="border-2 border-darker-500 text-[14px] pt-1 pb-1 pl-6 pr-6 text-darker-500 rounded-sm"
				>
					Download CV
				</Link>
				<Link href="http://localhost:5173" />
			</div>
		</div>
	)
}
