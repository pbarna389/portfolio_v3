import { Icon, Link, ProfilePic } from '@components'

export const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col gap-2 justify-center items-center relative sm:justify-between sm:gap-10 *:-z-1"
		>
			<div className="flex flex-col gap-1 justify-center items-center">
				<h2 className="text-lg font-bold text-white lg:text-4xl">About Me</h2>
				<h3 className="text-center text-sm text-darker-600">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</h3>
			</div>
			<div className="sm:flex sm:flex-row sm:gap-10">
				<ProfilePic className='before:rounded-t-full before:rounded-b-none before:absolute before:bottom-0 before:w-[min(calc(100vw*0.85),600px)] before:h-[min(calc(100vw*0.925),800px)] before:content-[""] before:bg-white/4 before:-z-1 sm:before:w-[min(calc(100vw*0.42),550px)] sm:before:h-[min(calc(100vw*0.52),550px)] md:before:w-[min(calc(100vw*0.43),500px)] md:before:h-[min(calc(100vw*0.445),600px)] md:before:h-max-[700px] lg:before:w-[min(calc(100vw*0.42),525px)] lg:before:max-w-[500px] lg:before:max-h-[700px] lg:before:h-[max(calc(100vw*0.5),590px)]' />
				<div className="basis-1/2 flex flex-col justify-center items-center gap-4 sm:flex sm:items-start sm:gap-4">
					<p className="text-center text-[16px] text-darker-500 sm:text-start sm:text-xl">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente possimus vel
						nesciunt fugiat tempore molestias architecto adipisci nostrum, voluptates expedita
						illo nobis excepturi quae voluptate sequi obcaecati earum ipsum error.
					</p>
					<Link
						href="http://localhost:5173"
						className="rounded-sm flex flex-row justify-center items-center gap-2 bg-highlight pt-[calc(0.5rem-2px)] pr-[calc(1rem-4px)]	pb-[calc(0.5rem-2px)] pl-[calc(1rem-4px)] justify-self-start text-center text-[14px]	sm:col-start-3 sm:col-end-4 sm:justify-self-end sm:text-xl"
					>
						<Icon name="download" />
						Download CV
					</Link>
				</div>
			</div>
		</section>
	)
}
