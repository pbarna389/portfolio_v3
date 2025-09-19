import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import emailjs from '@emailjs/browser'

import { InputFactory } from '@components'

import { useStopwatchSetters } from './context'
import { BASE_COUNTER_TIME, FORM_DEFAULT_VALUES, FORM_INPUTS } from './constants'

import type { ContactFormDataType } from './schema'
import { ContactFormSchema } from './schema'
import { SubmitBtn } from './SubmitBtn'

export const Form = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false)
	const [isSending, setIsSending] = useState(false)

	const { setStatusText, setTimer, setLocalStorageItem } = useStopwatchSetters()

	const {
		register,
		reset,
		handleSubmit: formSubmit,
		formState: { errors, isValid }
	} = useForm<ContactFormDataType>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: FORM_DEFAULT_VALUES
	})

	const onError = () => {
		setHasSubmitted(true)
	}

	const handleSubmit = formSubmit(async (data) => {
		setIsSending(true)
		setStatusText(null)

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

			setStatusText('Message sent successfully!')
			setHasSubmitted(false)
			setLocalStorageItem(currentTime + BASE_COUNTER_TIME)
			setTimer(currentTime)

			reset(FORM_DEFAULT_VALUES)
		} catch {
			setStatusText('Failed to send message. Please try again.')
		} finally {
			setIsSending(false)
		}
	}, onError)

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
			<SubmitBtn hasSubmitted={hasSubmitted} isSending={isSending} isValid={isValid} />
		</form>
	)
}
