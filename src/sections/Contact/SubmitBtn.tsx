import { useMemo } from 'react'

import { Button } from '@components'

import { useFormStopwatch, useStopwatchSetters } from './context'

type SubmitBtnProps = {
	hasSubmitted: boolean
	isSending: boolean
	isValid: boolean
}

export const SubmitBtn = ({ hasSubmitted, isSending, isValid }: SubmitBtnProps) => {
	const { statusText, timer, timerEnd } = useFormStopwatch()
	const { removeLocalStorageItem, setTimer } = useStopwatchSetters()

	useMemo(() => {
		if (!timerEnd || !timer) return

		const currentTime = Date.now()

		if ((timerEnd - timer) / 1000 > 0) {
			const timeout = setTimeout(() => {
				setTimer(currentTime)
			}, 1000)

			return () => clearTimeout(timeout)
		} else if ((timerEnd - timer) / 1000 < 1) {
			removeLocalStorageItem()
		}
	}, [timerEnd, timer, removeLocalStorageItem, setTimer])

	const isLocked =
		(!isValid && hasSubmitted) ||
		isSending ||
		(timerEnd && timer && (timerEnd - timer) / 1000 > 0)

	const remainingTime = timerEnd && timer && Math.floor((timerEnd - timer) / 1000)
	const currentSecond = remainingTime && remainingTime % 60
	const currentMinute = remainingTime && Math.floor((remainingTime / 60) % 60)
	const currentHour = remainingTime && Math.floor((remainingTime / 3600) % 60)

	return (
		<>
			<Button
				className="relative z-1 border-2 border-darker-500 text-[16px] text-center text-bold mt-2 pt-1 pb-1 pl-4.75 pr-4.75 text-darker-500 sm:text-[20px] rounded-md w-fit cursor-pointer transition text-bold text-2xl disabled:brightness-25 disabled:cursor-not-allowed self-center hover:brightness-125 hover:scale-105 disabled:hover:scale-100"
				type="submit"
				disabled={!!isLocked}
			>
				Send
				{!!remainingTime && (
					<p className="absolute -top-5.5 left-2 text-red-500 text-sm">
						<span>{currentHour && currentHour >= 10 ? currentHour : `0${currentHour}`}:</span>
						<span>
							{currentMinute && currentMinute >= 10 ? currentMinute : `0${currentMinute}`}:
						</span>
						<span>
							{currentSecond && currentSecond >= 10 ? currentSecond : `0${currentSecond}`}
						</span>
					</p>
				)}
			</Button>
			{statusText && (
				<p
					className={`text-center ${statusText.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}
				>
					{statusText}
				</p>
			)}
		</>
	)
}
