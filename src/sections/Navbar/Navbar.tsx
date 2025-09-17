import { Button, Link, Navigation } from '@components'

export const Navbar = () => {
	return (
		<header id="header" className="pt-2">
			<nav
				className={`grid grid-cols-2 items-center mr-4 ml-4 sm:grid-cols-3 sm:ml-6 sm:mr-6`}
			>
				<Navigation desktopMode={true} />
				<Button
					as={Link}
					href="#contact"
					target=""
					className="bg-highlight pt-[calc(0.5rem-2px)] pr-[calc(1rem-4px)]	pb-[calc(0.5rem-2px)] pl-[calc(1rem-4px)] justify-self-start text-center	text-[14px] text-black sm:col-start-3 sm:col-end-4 sm:justify-self-end sm:text-sm rounded-sm transition hover:active:brightness-125 hover:scale-105"
				>
					Hire me
				</Button>
			</nav>
		</header>
	)
}
