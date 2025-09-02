import { IconCollection } from '@components'

import { DEMONSTRATABLE_SKILLS } from './constants'

import { Skill } from './Skill'

export const Skills = () => {
	return (
		<section
			id="skills"
			className="flex flex-col gap-1 justify-center items-center relative sm:gap-10"
		>
			<h1 className="text-lg font-bold text-white lg:text-4xl">Skills</h1>
			<IconCollection
				arrayToCreateFrom={DEMONSTRATABLE_SKILLS}
				size={40}
				component={Skill}
				className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 gap-4"
			/>
		</section>
	)
}
