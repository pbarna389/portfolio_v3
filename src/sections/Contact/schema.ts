import z from 'zod'

import { contactSchemaConstants } from './constants/constants'

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/

export const ContactFormSchema = z.object({
	name: z.string().min(contactSchemaConstants.name.minLength, {
		error: contactSchemaConstants.name.minErrorMessage()
	}),
	email: z.email(),
	phone: z
		.string()
		.min(7, 'Phone number is too short')
		.max(20, 'Phone number is too long')
		.regex(phoneRegex, 'Invalid phone number format'),
	details: z
		.string()
		.min(contactSchemaConstants.details.minLength, {
			error: contactSchemaConstants.details.minErrorMessage()
		})
		.max(contactSchemaConstants.details.maxLength, {
			error: contactSchemaConstants.details.maxErrorMessage()
		})
})

export type ContactFormDataType = z.infer<typeof ContactFormSchema>
