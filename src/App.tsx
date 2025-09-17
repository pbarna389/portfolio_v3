import { About, Contact, Footer, Hero, Menu, Navbar, NavToTopBtn, Skills } from '@section'

import { useLoaderContext } from '@context'
import { Loader } from '@components'
import { useDatabase } from '@hooks'

function App() {
	const { loading } = useLoaderContext()

	useDatabase()

	if (loading) {
		return <Loader />
	}

	return (
		<div className="space-y-6 sm:space-y-10">
			<Navbar />
			<Menu />
			<NavToTopBtn />
			<main className="space-y-6 sm:space-y-10">
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
