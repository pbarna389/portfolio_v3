import { useEffect, useState } from 'react'

export type SkillsProps = React.PropsWithChildren & {
	name: string
	progress: number
}

export const Skill = ({ name, progress, children }: SkillsProps) => {
	const [statusToShow, setStatusToShow] = useState<number>(0)

	useEffect(() => {
		let timeout: NodeJS.Timeout

		if (statusToShow < progress) {
			timeout = setTimeout(() => {
				setStatusToShow((prev) => prev + 1)
			}, 25)
		}

		return () => clearTimeout(timeout)
	}, [statusToShow, progress])

	const radius = 50
	const circumference = 2 * Math.PI * radius
	const offset = circumference - (statusToShow / 100) * circumference

	return (
		<div className="flex flex-col items-center">
			<div className="relative flex flex-row flex-wrap items-center justify-center">
				<svg className="min-h-[100px] max-h-[175px] min-w-[100px] max-w-[175px] h-[max(calc(100vw*0.5),175px)] w-[max(calc(100vw*0.5),175px)] transform -rotate-90">
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

				<div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					{children}
				</div>
			</div>
			<span className="capitalize text-center overflow-ellipsis break-keep">{name}</span>
			<span className="text-xl font-bold">{statusToShow}%</span>
		</div>
	)
}
