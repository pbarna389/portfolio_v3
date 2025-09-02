import img from '../../assets/testPic.png'

type ProfilePicProps = {
	className?: string
}

export const ProfilePic = ({ className = '' }: ProfilePicProps) => {
	return (
		<div
			className={`flex flex-col relative basis-1/2 justify-end items-center *:-z-1 border-2 border-white overflow-hidden ${className}`}
		>
			<img
				className="grayscale-100 w-6/7 sm:w-[max(80vw,650px)] md:w-6/7 xl:w-[550px]"
				src={img}
			/>
		</div>
	)
}
