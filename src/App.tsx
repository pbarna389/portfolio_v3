import { Hero, Menu, Navbar } from '@section'

function App() {
	return (
		<>
			<header>
				<Navbar />
				<Menu />
			</header>
			<main>
				<h1 className="text-3xl font-bold text-highlight">Portfolio Site</h1>
				<Hero />
			</main>
		</>
	)
}

export default App
