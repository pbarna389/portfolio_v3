type FormMessageProps = {
	remainingTime: number | null
}

export const FormCountdown = ({ remainingTime }: FormMessageProps) => {
	const currentSecond = remainingTime && remainingTime % 60
	const currentMinute = remainingTime && Math.floor((remainingTime / 60) % 60)
	const currentHour = remainingTime && Math.floor((remainingTime / 3600) % 60)

	return (
		<div
			className={`absolute top-0 left-1/2 transform -translate-x-1/2 text-center scale-y-0 ${remainingTime && 'scale-y-100'}`}
		>
			{!!remainingTime && (
				<p className="text-red-500 text-sm">
					<span>{currentHour && currentHour >= 10 ? currentHour : `0${currentHour}`}:</span>
					<span>
						{currentMinute && currentMinute >= 10 ? currentMinute : `0${currentMinute}`}:
					</span>
					<span>
						{currentSecond && currentSecond >= 10 ? currentSecond : `0${currentSecond}`}
					</span>
				</p>
			)}
		</div>
	)
}
