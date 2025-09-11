import { useEffect } from 'react'

import { db } from '@config'
import { About, Contact, Footer, Hero, Menu, Navbar, NavToTopBtn, Skills } from '@section'
import { useLoaderContext } from 'context/textContext'
import { collection, getDocs } from 'firebase/firestore/lite'

import { useTextContext } from '@context'
import type { TextDataType } from '@types'

function App() {
	const { setTextData } = useTextContext()
	const { loading, setLoading } = useLoaderContext()

	useEffect(() => {
		const getData = async () => {
			const textRef = collection(db, 'textData')
			const textData = await getDocs(textRef)
			const filteredData = textData.docs.map((doc) => doc.data())

			const dataObj = filteredData.reduce((obj, curr) => {
				const newKey = Object.keys(curr)[0]
				const newValue = Object.values(curr)

				obj[newKey] = newValue.flat()

				return obj
			}, {})

			console.log(dataObj)

			setTextData(dataObj as TextDataType)
			setLoading(false)
		}

		getData()
	}, [setTextData, setLoading])

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
