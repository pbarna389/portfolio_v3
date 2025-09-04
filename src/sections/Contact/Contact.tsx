import { SectionHeader } from '@components'

import { Form } from './Form'

export const Contact = () => {
	return (
		<section
			id="contact"
			className="flex flex-col gap-8 justify-center items-center relative sm:justify-between pt-6 pb-6 pr-4 pl-4 sm:pt-8 sm:pb-8 sm:pl-6 sm:pr-6 border-2 border-white"
		>
			<SectionHeader
				title={'Contact'}
				subText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
			/>
			<Form />
		</section>
	)
}
