import { Link, Navigation } from '@components'

export const Navbar = () => {
	return (
		<nav className={`sm:item grid grid-cols-3 items-center border-2 border-white`}>
			<h2 className="justify-self-center col-start-2 col-end-3 sm:col-start-1 sm:col-end-2 sm:justify-self-start">
				Logo
			</h2>
			<Navigation desktopMode={true} />
			<Link href="http://localhost:5173">Hire me</Link>
		</nav>
	)
}
