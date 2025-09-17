import { useTextContext } from '@context'
import { Background, Button, IconCollection, Link } from '@components'

import { TitleHeader } from './TitleHeader'

export const Title = () => {
	const {
		textData: { profileLinks }
	} = useTextContext()

	return (
		<div className="basis-1/2 flex flex-col relative gap-1 justify-center items-center sm:items-start p-4">
			<Background />
			<TitleHeader />
			<IconCollection
				size={20}
				arraySource={profileLinks}
				className="flex flex-row gap-2 mb-8 justify-center items-center sm:justify-start sm:items-start *:rounded-full"
			/>
			<div className="flex flex-row flex-wrap item-center justify-center gap-2 mt-2 mb-4">
				<Button
					as={Link}
					href="#contact"
					target=""
					className="bg-highlight text-[16px] text-center text-black rounded-md pt-1 pb-1 pl-6 pr-6 sm:text-[20px] transition hover:active:brightness-125 hover:scale-105"
				>
					Hire me
				</Button>
				<Button
					as={Link}
					href="http://localhost:5173"
					className="border-2 border-darker-500 text-[16px] text-center rounded-md pt-1 pb-1 pl-6 pr-6 text-darker-500 sm:text-[20px] transition hover:brightness-125 hover:scale-105"
				>
					Download CV
				</Button>
			</div>
		</div>
	)
}
