type ProfilePicProps = {
	src: string
	className?: string
}

export const ProfilePic = ({ src, className = '' }: ProfilePicProps) => {
	return (
		<div
			className={`flex flex-col relative basis-1/2 justify-end items-center overflow-hidden ${className}`}
		>
			<img
				className="w-6/7 sm:relative sm:w-[max(80vw,650px)] md:w-6/7 xl:w-[550px] sm:grayscale-100 sm:hover:grayscale-0 transition ease-in-out duration-700"
				src={src}
				alt="picture about me"
			/>
		</div>
	)
}
