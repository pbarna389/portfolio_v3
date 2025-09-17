import { useTextContext } from '@context'
import { Background, IconCollection } from '@components'
import { useIntersectionObserver } from '@hooks'

import { Skill } from './Skill'

export const Skills = () => {
	const { ref, inView } = useIntersectionObserver({ shouldFreeze: true })

	const {
		textData: { skills }
	} = useTextContext()

	return (
		<section
			ref={ref}
			id="skills"
			className={`flex flex-col gap-4 justify-center items-center relative sm:gap-10 pt-6 pb-6 pr-4 pl-4 sm:pt-8 sm:pb-8 sm:pl-6 sm:pr-6 transition duration-500 blur-2xl ${inView && 'blur-none'}`}
		>
			<h1 className="text-lg font-bold text-white lg:text-4xl">Skills</h1>
			<Background />
			<IconCollection
				arraySource={skills}
				size={50}
				component={Skill}
				inView={inView}
				className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 gap-4 w-full"
			/>
		</section>
	)
}
