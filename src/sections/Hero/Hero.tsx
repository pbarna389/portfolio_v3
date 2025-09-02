import { ProfilePic } from '@components'

import { Title } from './Title'

export const Hero = () => {
	return (
		<div className="flex flex-col gap-1 relative sm:flex sm:flex-row sm:justify-between sm:gap-10 *:-z-1">
			<Title />
			<ProfilePic basisNum={50} />
		</div>
	)
}
