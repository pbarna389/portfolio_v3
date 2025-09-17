import z from 'zod'

import { CONTACT_SCHEMA_CONSTANTS } from './constants'

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/

export const ContactFormSchema = z.object({
	name: z.string().min(CONTACT_SCHEMA_CONSTANTS.name.minLength, {
		error: CONTACT_SCHEMA_CONSTANTS.name.minErrorMessage()
	}),
	email: z.email(),
	title: z
		.string()
		.min(CONTACT_SCHEMA_CONSTANTS.title.minLength, {
			error: CONTACT_SCHEMA_CONSTANTS.title.minErrorMessage()
		})
		.max(CONTACT_SCHEMA_CONSTANTS.title.maxLength, {
			error: CONTACT_SCHEMA_CONSTANTS.title.maxErrorMessage()
		}),
	phone: z
		.string()
		.min(7, 'Phone number is too short')
		.max(20, 'Phone number is too long')
		.regex(phoneRegex, 'Invalid phone number format'),
	details: z
		.string()
		.min(CONTACT_SCHEMA_CONSTANTS.details.minLength, {
			error: CONTACT_SCHEMA_CONSTANTS.details.minErrorMessage()
		})
		.max(CONTACT_SCHEMA_CONSTANTS.details.maxLength, {
			error: CONTACT_SCHEMA_CONSTANTS.details.maxErrorMessage()
		})
})

export type ContactFormDataType = z.infer<typeof ContactFormSchema>
