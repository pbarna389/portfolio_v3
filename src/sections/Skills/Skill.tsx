import { useState } from 'react'

export const Skill = () => {
	const [progress] = useState(65) // percent (0–100)

	const radius = 50
	const circumference = 2 * Math.PI * radius
	const offset = circumference - (progress / 100) * circumference

	return (
		<div className="flex flex-col items-center space-y-4">
			<svg className="w-40 h-40 transform -rotate-90">
				<circle cx="50%" cy="50%" r={radius} stroke="#707070" strokeWidth="12" fill="none" />
				<circle
					cx="50%"
					cy="50%"
					r={radius}
					stroke="#fd6f00"
					strokeWidth="12"
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					className="transition-all duration-700 ease-out"
				/>
			</svg>

			<div className="absolute flex items-center justify-center w-40 h-40">
				<span className="text-xl font-bold">{progress}%</span>
			</div>
		</div>
	)
}
