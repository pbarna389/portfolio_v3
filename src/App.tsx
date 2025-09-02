import { About, Hero, Menu, Navbar } from '@section'

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
			</main>
		</div>
	)
}

export default App
