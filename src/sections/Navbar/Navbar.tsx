import { Link, Navigation } from '@components'

export const Navbar = () => {
	return (
		<nav className={`sm:item grid grid-cols-3 items-center border-2 border-white`}>
			<h2 className="justify-self-center col-start-2 col-end-3 sm:col-start-1 sm:col-end-2 sm:justify-self-start">
				Logo
			</h2>
			<Navigation desktopMode={true} />
			<Link
				href="#contact"
				className="bg-highlight pt-[calc(0.5rem-2px)] pr-[calc(1rem-4px)]	pb-[calc(0.5rem-2px)] pl-[calc(1rem-4px)] justify-self-start text-center	text-[14px]	sm:col-start-3 sm:col-end-4 sm:justify-self-end sm:text-sm rounded-sm"
			>
				Hire me
			</Link>
		</nav>
	)
}
