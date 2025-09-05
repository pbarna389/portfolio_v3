import { About, Contact, Footer, Hero, Menu, Navbar, Skills } from '@section'

function App() {
	return (
		<div className="flex flex-col gap-12 sm:gap-20">
			<Navbar />
			<Menu />
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
