import img from '../../assets/testPic.png'

type ProfilePicProps = {
	basisNum?: number
	fullyRounded?: boolean
}

export const ProfilePic = ({ basisNum = 50, fullyRounded = true }: ProfilePicProps) => {
	return (
		<div
			className={`flex flex-col relative basis-${basisNum} justify-center items-center before:absolute before:bottom-0 before:rounded-${fullyRounded && 'full'} before:w-[calc(100vw*0.902)] before:h-[calc(100vw*0.902)] before:content-[""] before:bg-white/4 before:-z-1 *:-z-1`}
		>
			<img className="grayscale-100 w-6/7" src={img} />
		</div>
	)
}
