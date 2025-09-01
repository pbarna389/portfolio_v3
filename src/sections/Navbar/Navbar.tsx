import { Link } from '@components'

export const Navbar = () => {
	return (
		<nav
			className={`
				flex flex-row
				items-center justify-between
				border-2 border-white
			`}
		>
			<h2>Menu</h2>
			<Link href="http://localhost:5173">Hire me</Link>
		</nav>
	)
}
