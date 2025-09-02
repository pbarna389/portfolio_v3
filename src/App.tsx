import { Hero, Menu, Navbar } from '@section'

function App() {
	return (
		<div className="*:mb-12 sm:mb-6">
			<header>
				<Navbar />
				<Menu />
			</header>
			<main>
				<Hero />
			</main>
		</div>
	)
}

export default App
