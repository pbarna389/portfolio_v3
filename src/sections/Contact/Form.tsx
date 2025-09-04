import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { InputFactory } from '@components'

import { formDefaultValues, formInputs } from './constants'

import type { ContactFormDataType } from './schema'
import { ContactFormSchema } from './schema'

export const Form = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false)

	const {
		register,
		reset,
		handleSubmit: formSubmit,
		formState: { errors, isValid }
	} = useForm<ContactFormDataType>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: formDefaultValues
	})

	const isLocked = !isValid && hasSubmitted

	const onError = () => {
		setHasSubmitted(true)
	}

	const handleSubmit = formSubmit((data) => {
		alert(`Works like a charm! Data: ${JSON.stringify(data)}`)

		reset(formDefaultValues)
	}, onError)

	return (
		<form
			autoComplete="off"
			onSubmit={handleSubmit}
			className="w-full sm:w-3/4 flex flex-col gap-[calc(0.75rem+1px)]"
		>
			<div className="flex flex-col gap-8 justify-center items-center w-full sm:grid sm:grid-cols-2 sm:gap-6">
				{formInputs.map(({ name, placeholder, type }) => (
					<InputFactory<ContactFormDataType>
						key={name}
						inputDetails={{ name, placeholder }}
						register={register}
						type={type}
						error={errors[name]}
					/>
				))}
			</div>
			<button
				className="z-1 border-2 border-darker-500 text-[16px] text-center text-bold pt-1 pb-1 pl-4.75 pr-4.75 text-darker-500 sm:text-[20px] rounded-md w-fit cursor-pointer transition duration-500 text-bold text-2xl disabled:brightness-25 disabled:cursor-not-allowed self-center hover:brigtness-125 hover:scale-105 disabled:hover:scale-100"
				type="submit"
				disabled={isLocked}
			>
				Send
			</button>
		</form>
	)
}
