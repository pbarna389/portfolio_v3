import { useMemo, useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import emailjs from '@emailjs/browser'

import { Button, InputFactory } from '@components'
import { useLocalStorage } from '@hooks'

import { BASE_COUNTER_TIME, FORM_DEFAULT_VALUES, FORM_INPUTS } from './constants'

import type { ContactFormDataType } from './schema'
import { ContactFormSchema } from './schema'

export const Form = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false)
	const [isSending, setIsSending] = useState(false)
	const [statusMessage, setStatusMessage] = useState<string | null>(null)
	const [submitTimer, setSubmitTimer] = useState<number | undefined>(undefined)
	const [finishLine, { setItem, removeItem }] = useLocalStorage<number>(
		'submit-disable-timer',
		setSubmitTimer
	)

	const {
		register,
		reset,
		handleSubmit: formSubmit,
		formState: { errors, isValid }
	} = useForm<ContactFormDataType>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: FORM_DEFAULT_VALUES
	})

	const isLocked =
		(!isValid && hasSubmitted) ||
		isSending ||
		(finishLine && submitTimer && (finishLine - submitTimer) / 1000 > 0)

	useMemo(() => {
		if (!finishLine || !submitTimer) return

		const currentTime = Date.now()

		if ((finishLine - submitTimer) / 1000 > 0) {
			const timeout = setTimeout(() => {
				setSubmitTimer(currentTime)
			}, 1000)

			return () => clearTimeout(timeout)
		} else if ((finishLine - submitTimer) / 1000 < 1) {
			removeItem()
			setStatusMessage(null)
		}
	}, [finishLine, submitTimer, removeItem])

	const onError = () => {
		setHasSubmitted(true)
	}

	const handleSubmit = formSubmit(async (data) => {
		setIsSending(true)
		setStatusMessage(null)

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: `${data.name}: ${data.title}`,
					from_email: data.email,
					message: `${data.details} \n Phone number:${data.phone}`
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)

			const currentTime = Date.now()

			setStatusMessage('Message sent successfully!')
			setHasSubmitted(false)
			setItem(currentTime + BASE_COUNTER_TIME)
			setSubmitTimer(currentTime)

			reset(FORM_DEFAULT_VALUES)
		} catch {
			setStatusMessage('Failed to send message. Please try again.')
		} finally {
			setIsSending(false)
		}
	}, onError)

	const remainingTime =
		finishLine && submitTimer && Math.floor((finishLine - submitTimer) / 1000)
	const currentSecond = remainingTime && remainingTime % 60
	const currentMinute = remainingTime && Math.floor((remainingTime / 60) % 60)
	const currentHour = remainingTime && Math.floor((remainingTime / 3600) % 60)

	return (
		<form
			autoComplete="off"
			onSubmit={handleSubmit}
			className="w-full sm:w-3/4 flex flex-col gap-[calc(0.75rem+1px)]"
		>
			<div className="flex flex-col gap-8 justify-center items-center w-full sm:grid sm:grid-cols-2 sm:gap-6">
				{FORM_INPUTS.map(({ name, placeholder, type }) => (
					<InputFactory<ContactFormDataType>
						key={name}
						inputDetails={{ name, placeholder }}
						register={register}
						type={type}
						error={errors[name]}
					/>
				))}
			</div>
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
			{statusMessage && (
				<p
					className={`text-center ${statusMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}
				>
					{statusMessage}
				</p>
			)}
		</form>
	)
}
