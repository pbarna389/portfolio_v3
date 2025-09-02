import img from '../../assets/testPic.png'

type ProfilePicProps = {
	basisNum?: number
}

export const ProfilePic = ({ basisNum = 50 }: ProfilePicProps) => {
	return (
		<div
			className={`flex flex-col relative basis-${100 / basisNum} justify-end items-center before:absolute before:bottom-0 before:rounded-full before:w-[min(calc(100vw*0.945),750px)] before:h-[min(calc(100vw*0.945),750px)] before:content-[""] before:bg-white/4 before:-z-1 sm:before:w-[min(calc(100vw*0.42),550px)] sm:before:h-[min(calc(100vw*0.42),550px)] md:before:w-[min(calc(100vw*0.47),500px)] md:before:h-[min(calc(100vw*0.47),500px)] lg:before:w-[min(calc(100vw*0.42),525px)] lg:before:h-[min(calc(100vw*0.42),525px)] *:-z-1 border-2 border-white`}
		>
			<img className="grayscale-100 w-6/7 sm:w-[max(80vw,650px)] md:w-6/7" src={img} />
		</div>
	)
}
