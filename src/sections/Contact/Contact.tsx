import { SectionHeader } from '@components'
import { useIntersectionObserver } from '@hooks'

import { Form } from './Form'

export const Contact = () => {
	const { ref, inView } = useIntersectionObserver({ shouldFreeze: true })

	return (
		<section
			ref={ref}
			id="contact"
			className={`flex flex-col gap-8 justify-center items-center relative sm:justify-between pt-6 pb-6 pr-4 pl-4 sm:pt-8 sm:pb-8 sm:pl-6 sm:pr-6 border-2 border-white  transition duration-500 blur-2xl ${inView && 'blur-none'}`}
		>
			<SectionHeader
				title={'Contact Me'}
				subText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
			/>
			<Form />
		</section>
	)
}
