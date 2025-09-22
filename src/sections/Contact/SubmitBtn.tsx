import { useEffect, useState } from 'react'

import { Button } from '@components'

import { useFormStopwatch, useStopwatchSetters } from './context'

import { FormCountdown } from './FormCountdown'

type SubmitBtnProps = {
	hasSubmitted: boolean
	isSending: boolean
	isValid: boolean
}

export const SubmitBtn = ({ hasSubmitted, isSending, isValid }: SubmitBtnProps) => {
	const { timerStart, timerEnd } = useFormStopwatch()
	const { removeLocalStorageItem } = useStopwatchSetters()

	const [timer, setTimer] = useState<number | null>(timerStart)

	useEffect(() => {
		if (timerStart && !timer) {
			const timeout = setTimeout(() => {
				setTimer(timerStart)
			}, 0)

			return () => clearTimeout(timeout)
		}

		if (!timerEnd || !timerStart || !timer) return

		const currentTime = Date.now()

		if ((timerEnd - timer) / 1000 >= 1) {
			const timeout = setTimeout(() => {
				setTimer(currentTime)
			}, 1000)

			return () => clearTimeout(timeout)
		} else if ((timerEnd - timer) / 1000 < 1) {
			removeLocalStorageItem()
		}
	}, [timerEnd, timerStart, timer, removeLocalStorageItem])

	const isLocked =
		(!isValid && hasSubmitted) ||
		isSending ||
		(timerEnd && timer && (timerEnd - timer) / 1000 > 0)

	const remainingTime = timerEnd && timer && Math.floor((timerEnd - timer) / 1000)

	return (
		<div className="flex flex-col w-fit self-center justify-center items-centerself-center relative z-2 p-5">
			<FormCountdown remainingTime={remainingTime} />
			<Button
				className={`border-2 border-darker-500 text-[16px] text-center text-bold pt-1 pb-1 pl-4.75 pr-4.75 text-darker-500 sm:text-[20px] rounded-md w-fit cursor-pointer transition text-bold text-2xl disabled:brightness-25 disabled:cursor-not-allowed self-center hover:brightness-125 hover:scale-105 disabled:hover:scale-100`}
				type="submit"
				disabled={!!isLocked}
			>
				Send
			</Button>
		</div>
	)
}
