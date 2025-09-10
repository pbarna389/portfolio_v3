import { useEffect, useState } from 'react'

import { db } from '@config'
import { About, Contact, Footer, Hero, Menu, Navbar, NavToTopBtn, Skills } from '@section'
import { collection, type DocumentData, getDocs } from 'firebase/firestore/lite'

function App() {
	const [textData, setTextData] = useState<DocumentData[]>()

	useEffect(() => {
		const getData = async () => {
			const textRef = collection(db, 'textData')
			const data = await getDocs(textRef)
			const filteredData = data.docs.map((doc) => doc.data())

			setTextData(filteredData)
		}

		getData()
	}, [])

	useEffect(() => {
		console.log(textData)
	}, [textData])

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
