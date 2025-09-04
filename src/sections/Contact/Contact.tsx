import { SectionHeader } from '@components'

import { Form } from './Form'

export const Contact = () => {
	return (
		<section className="flex flex-col gap-8 justify-center items-center relative sm:justify-between">
			<SectionHeader
				title={'Contact'}
				subText={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
			/>
			<Form />
		</section>
	)
}
