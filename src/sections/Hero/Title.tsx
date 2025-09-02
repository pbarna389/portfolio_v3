import { IconCollection, Link } from '@components'

import { PROFILE_LINKS } from './constants'

import { Background } from './Background'

export const Title = () => {
	return (
		<div className="basis-1/2 flex flex-col relative gap-1 justify-center items-center sm:items-start border-2 -z-1 border-white p-4 *:-z-1">
			<Background />
			<h3 className="font-semibold text-md text-darker-700 sm:text-lg md:text-xl">
				Hi, I am
			</h3>
			<h2 className="font-bold text-xl text-darker-500 sm:text-xl md:text-2xl">
				Barnabás Papp
			</h2>
			<h1 className="inline-block text-4xl leading-12 text-center text-transparent font-bold mt-8 mb-8  bg-gradient-to-r from-darker-700 via-highlight to-darker-700 bg-clip-text sm:text-start sm:text-[70px]">
				Frontend Developer
			</h1>
			<IconCollection
				color={'#959595'}
				size={20}
				arrayToCreateFrom={PROFILE_LINKS}
				className="flex flex-row gap-2 mb-8 justify-center items-center sm:justify-start sm:items-start"
			/>
			<div className="flex flex-row gap-2 mt-2 mb-4">
				<Link
					href="http://localhost:5173"
					className="bg-highlight text-[16px] text-center pt-1 pb-1 pl-6 pr-6 rounded-sm sm:text-[20px]"
				>
					Hire me
				</Link>
				<Link href="http://localhost:5173" />
				<Link
					href="http://localhost:5173"
					className="border-2 border-darker-500 text-[16px] text-center pt-1 pb-1 pl-6 pr-6 text-darker-500 rounded-sm sm:text-[20px]"
				>
					Download CV
				</Link>
				<Link href="http://localhost:5173" />
			</div>
		</div>
	)
}
