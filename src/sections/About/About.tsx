import { useTextContext } from '@context'
import { Background, Button, Icon, Link, ProfilePic, SectionHeader } from '@components'
import { useIntersectionObserver } from '@hooks'

import img from '../../assets/portfolio01.png'

export const About = () => {
	const { ref, inView } = useIntersectionObserver({ shouldFreeze: true })
	const {
		textData: { aboutMe }
	} = useTextContext()

	return (
		<section
			ref={ref}
			id="about"
			className={`flex flex-col gap-8 justify-center items-center relative sm:justify-between pt-6 pb-6 pr-4 pl-4 sm:pt-8 sm:pb-8 sm:pl-6 sm:pr-6  w-full transition duration-500 blur-2xl ${inView && 'blur-none'}`}
		>
			<SectionHeader title={'About Me'} subText={aboutMe.heading} />
			<div className="sm:flex sm:flex-row sm:gap-10 w-full">
				<ProfilePic
					src={img}
					className='sm:flex sm:items-center sm:justify-center before:rounded-t-full before:rounded-b-none before:absolute before:bottom-0 before:w-[min(calc(100vw*0.85),600px)] before:h-[min(calc(100vw*0.925),800px)] before:content-[""] before:bg-white/4 before:-z-1 sm:before:w-[min(calc(100vw*0.42),550px)] sm:before:h-[min(calc(100vw*0.52),550px)] md:before:w-[min(calc(100vw*0.43),500px)] md:before:h-[min(calc(100vw*0.445),600px)] md:before:h-max-[700px] lg:before:w-[min(calc(100vw*0.42),525px)] lg:before:max-w-[500px] lg:before:max-h-[700px] lg:before:h-[max(calc(100vw*0.5),590px)] basis-1/2'
				/>
				<div className="relative basis-1/2 flex flex-col justify-center items-center gap-4 sm:flex sm:items-start sm:gap-4  p-4">
					<Background />
					<p className="text-justify text-[16px] text-darker-500 sm:text-start sm:text-xl">
						{aboutMe.text}
					</p>
					<Button
						as={Link}
						href="http://localhost:5173"
						className="flex flex-row rounded-md justify-center items-center gap-2 bg-highlight text-black pt-[calc(0.5rem-2px)] pr-[calc(1rem-4px)]	pb-[calc(0.5rem-2px)] pl-[calc(1rem-4px)] justify-self-start text-center text-[14px] sm:text-xl sm:self-center transition hover:active:brightness-125 hover:scale-105"
					>
						<Icon name="download" />
						Download CV
					</Button>
				</div>
			</div>
		</section>
	)
}
