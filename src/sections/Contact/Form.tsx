import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { ContactFormDataType } from './schema'
import { ContactFormSchema } from '../About/schemas'

export const Form = () => {
	const {
		register,
		handleSubmit: formSubmit,
		formState: { errors }
	} = useForm<ContactFormDataType>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: '',
			details: '',
			phone: '',
			email: ''
		}
	})

	const handleSubmit = formSubmit((data) => {
		console.log(data)
		console.log('Fired!')
	})

	return (
		<form className="z-1" onSubmit={handleSubmit}>
			Form
			<input className="outline-1" type="text" {...register('name')} />
			<input className="outline-1" type="text" {...register('email')} />
			<input className="outline-1" type="text" {...register('phone')} />
			<textarea className="outline-1" {...register('details')} />
			<button className="z-1 cursor-pointer" type="submit">
				Submit
			</button>
			{errors.name && <p>Some errors are here {errors.name.message}!</p>}
			{errors.email && <p>Some errors are here {errors.email.message}!</p>}
			{errors.phone && <p>Some errors are here {errors.phone.message}!</p>}
			{errors.details && <p>Some errors are here {errors.details.message}!</p>}
		</form>
	)
}
