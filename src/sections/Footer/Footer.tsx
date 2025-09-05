import { IconCollection, Navigation } from '@components'
import { PROFILE_LINKS } from '@constants'

import { IconWithText } from './IconWithText'

export const Footer = () => {
	return (
		<footer className="flex flex-col gap-4 justify-center items-center relative sm:justify-between bg-[#FFF]/4 w-full pt-8 pr-4 pl-4 pb-[calc(1.25rem-1px)] sm:mt-8 sm:pl-6 sm:pr-6 sm:pt-8 sm:gap-10">
			<h2>Logo</h2>
			<Navigation desktopMode={true} />
			<IconCollection
				size={20}
				arrayToCreateFrom={PROFILE_LINKS}
				className="flex flex-row gap-2 justify-center items-center  *:rounded-full"
			/>
			<span className="flex flex-col items-center justify-center gap-4 text-darker-500 sm:gap-5 sm:flex-row">
				<IconWithText name="mail" strokeWidth="0.75px" text="pbarna389@gmail.com" />
				<IconWithText name="telephone" strokeWidth="0.75px" text="+36-70/625-34-15" />
			</span>
			<span className="border-t-1 border-darker-500 pt-[calc(0.75rem+1px)] text-darker-500 w-6/7 text-center text-[16px] font-bold">
				Barnabás Papp
			</span>
		</footer>
	)
}
