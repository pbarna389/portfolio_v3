import { SectionHeader } from '@components'

import { useFormStopwatch } from './context'

export const ContactHeader = () => {
	const { timerEnd } = useFormStopwatch()

	return (
		<SectionHeader
			title={'Contact Me'}
			subText={`${timerEnd ? 'Message sent successfully!' : 'Contact me by submitting the form'}`}
		/>
	)
}
