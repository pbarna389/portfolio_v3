import Img from '../../assets/Vector.png'

export const Background = () => {
	return (
		<img
			src={Img}
			className="w-full h-full absolute top-0 left-0 -z-1 aspect-auto brightness-150"
			alt="background"
		/>
	)
}
