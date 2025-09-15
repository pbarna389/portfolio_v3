export const Loader = () => {
	return (
		<>
			<div className="loader fixed p-2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-54 h-54 rounded-full border-[4px] border-solid border-r-[#575757] border-t-transparent border-l-[#575757] border-b-transparent animate-spin-slow [animation:spin_3s_linear_infinite]"></div>
			<div className="fixed rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-36 h-36 border-4 border-r-[#fd6f00] border-t-transparent border-l-[#fd6f00] border-b-transparent [animation:spin_1.5s_linear_infinite_reverse]" />
			<div className="loader fixed p-2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-18 h-18 rounded-full border-[4px] border-solid border-r-transparent border-t-[#575757] border-l-transparent border-b-[#575757] animate-spin-slow before:content-[''] after:content-[''] [animation:spin_0.75s_linear_infinite]"></div>
		</>
	)
}
