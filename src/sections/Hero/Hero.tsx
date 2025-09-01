import { ProfilePic } from '@components'

export const Hero = () => {
	return (
		<div className="flex flex-col gap-1 sm:flex sm:flex-row sm:justify-between">
			<div className="basis-1/2">Data</div>
			<ProfilePic basisNum={50} />
		</div>
	)
}
