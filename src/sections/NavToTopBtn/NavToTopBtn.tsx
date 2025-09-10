import { Button, Icon, Link } from '@components'

export const NavToTopBtn = () => {
	return (
		<Button
			as={Link}
			href="#header"
			target=""
			className="fixed flex justify-center items-center bottom-4 right-4 rounded-full w-12 h-12 bg-highlight z-1 cursor-pointer border-4 border-darker-700 text-darker-700 transition-all duration-300 hover:bg-darker-700 hover:border-highlight hover:text-highlight hover:*:top-1/4 active:border-white active:text-white"
		>
			<Icon
				name="arrowUp"
				className="transition-all duration-300 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
			/>
		</Button>
	)
}
