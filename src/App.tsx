import { useEffect } from 'react'

import { db } from '@config'
import { About, Contact, Footer, Hero, Menu, Navbar, NavToTopBtn, Skills } from '@section'
import { useLoaderContext } from 'context/textContext'
import { collection, getDocs } from 'firebase/firestore/lite'

import { useTextContext } from '@context'
import { TEXT_STATE_BASEVALUE } from '@constants'
import type { FiresbaseDataType } from '@types'

function App() {
	const { setTextData } = useTextContext()
	const { loading, setLoading } = useLoaderContext()

	useEffect(() => {
		const getData = async () => {
			const textRef = collection(db, 'textData')
			const textData = await getDocs(textRef)
			const filteredData = textData.docs.map((doc) => doc.data())

			const dataObj = filteredData.reduce<FiresbaseDataType>((obj, curr) => {
				Object.entries(curr).forEach(([key, value]) => {
					obj[key] = Array.isArray(value) ? value.flat() : value
				})
				return obj
			}, TEXT_STATE_BASEVALUE)

			console.log(dataObj)

			setTextData(dataObj)
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
