import { useTextContext } from '@context'
import { IconCollection, Link } from '@components'

import { Background } from './Background'
import { TitleHeader } from './TitleHeader'

export const Title = () => {
	const {
		textData: { profileLinks }
	} = useTextContext()

	return (
		<div className="basis-1/2 flex flex-col relative gap-1 justify-center items-center sm:items-start border-2 border-white p-4">
			<Background />
			<TitleHeader />
			<IconCollection
				size={20}
				arraySource={profileLinks}
				className="flex flex-row gap-2 mb-8 justify-center items-center sm:justify-start sm:items-start *:rounded-full"
			/>
			<div className="flex flex-row flex-wrap item-center justify-center gap-2 mt-2 mb-4">
				<Link
					href="#contact"
					className="bg-highlight text-[16px] text-center rounded-md pt-1 pb-1 pl-6 pr-6 sm:text-[20px]"
				>
					Hire me
				</Link>
				<Link href="http://localhost:5173" />
				<Link
					href="http://localhost:5173"
					className="border-2 border-darker-500 text-[16px] text-center rounded-md pt-1 pb-1 pl-6 pr-6 text-darker-500 sm:text-[20px]"
				>
					Download CV
				</Link>
				<Link href="http://localhost:5173" />
			</div>
		</div>
	)
}
