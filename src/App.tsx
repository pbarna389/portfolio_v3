import { About, Hero, Menu, Navbar, Skills } from '@section'

function App() {
	return (
		<div className="flex flex-col gap-12 sm:gap-20">
			<header>
				<Navbar />
				<Menu />
			</header>
			<main className="flex flex-col gap-12 sm:gap-20">
				<Hero />
				<About />
				<Skills />
			</main>
		</div>
	)
}

export default App
