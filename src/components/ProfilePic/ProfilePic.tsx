import img from '../../assets/testPic.png'

type ProfilePicProps = {
	basisNum?: number
	fullyRounded?: boolean
}

export const ProfilePic = ({ basisNum = 50, fullyRounded = true }: ProfilePicProps) => {
	return (
		<div
			className={`flex flex-col relative basis-${100 / basisNum} justify-center items-center before:absolute before:bottom-0 before:rounded-${fullyRounded && 'full'} before:w-[min(calc(100vw*0.945),750px)] before:h-[min(calc(100vw*0.945),750px)] before:content-[""] before:bg-white/4 before:-z-1 sm:before:w-[min(calc(100vw*0.55),480px)] sm:before:h-[min(calc(100vw*0.55),480px)] md:before:w-[min(calc(100vw*0.5),525px)] md:before:h-[min(calc(100vw*0.5),525px)] lg:before:w-[min(calc(100vw*0.42),525px)] lg:before:h-[min(calc(100vw*0.42),525px)] *:-z-1`}
		>
			<img className="grayscale-100 w-6/7" src={img} />
		</div>
	)
}
