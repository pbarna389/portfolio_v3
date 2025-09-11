import { About, Contact, Footer, Hero, Menu, Navbar, NavToTopBtn, Skills } from '@section'

import { useLoaderContext } from '@context'
import { useDatabase } from '@hooks'

function App() {
	const { loading } = useLoaderContext()

	useDatabase()

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div className="flex flex-col gap-12 sm:gap-20">
			<Navbar />
			<Menu />
			<NavToTopBtn />
			<main className="flex flex-col gap-12 sm:gap-20">
				<Hero />
				<About />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
