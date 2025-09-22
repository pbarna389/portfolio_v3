import { ProfilePic } from '@components'
import { useIntersectionObserver } from '@hooks'

import { Title } from './Title'
import img from '../../assets/portfolio02.png'

export const Hero = () => {
	const { ref, inView } = useIntersectionObserver({ shouldFreeze: true })

	return (
		<section
			ref={ref}
			className={`flex flex-col gap-1 relative sm:flex sm:flex-row sm:justify-between sm:gap-10 pt-6 pr-4 pl-4 sm:pt-8 sm:pb-8 sm:pl-6 sm:pr-6 transition duration-500 blur-2xl ${inView && 'blur-none'}`}
		>
			<Title />
			<ProfilePic
				src={img}
				className='before:absolute before:bottom-0 before:rounded-full before:w-[min(calc(100vw*0.945),750px)] before:h-[min(calc(100vw*0.945),750px)] before:content-[""] before:bg-white/4 before:-z-2 sm:before:w-[calc(100vw*0.5)] sm:before:h-[calc(100vw*0.5)] sm:before:min-w-[350px] sm:before:min-h-[350px] sm:before:max-w-[750px] sm:before:max-h-[750px] md:before:w-[calc(100vw*0.47)] md:before:h-[calc(100vw*0.47)] md:before:min-w-[450px] md:before:min-h-[450px] md:before:max-w-[800px] md:before:max-h-[800px] lg:before:w-[calc(100vw*0.45))] lg:before:h-[calc(100vw*0.45)] lg:before:min-w-[600px] lg:before:min-h-[600px] lg:before:max-w-[800px] lg:before:max-h-[800px] xl:before:h-[650px] xl:before:w-[650px]'
			/>
		</section>
	)
}
