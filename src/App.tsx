import { useEffect } from 'react'

import { db } from '@config'
import { About, Contact, Footer, Hero, Menu, Navbar, NavToTopBtn, Skills } from '@section'
import { collection, getDocs } from 'firebase/firestore/lite'

import { useTextContext } from '@context'

function App() {
	const { dispatch } = useTextContext()

	useEffect(() => {
		const getData = async () => {
			const textRef = collection(db, 'textData')
			const textData = await getDocs(textRef)
			const filteredData = textData.docs.map((doc) => doc.data())

			dispatch(filteredData)
		}

		getData()
	}, [dispatch])

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
