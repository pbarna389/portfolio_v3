import type { InputTypeKeys } from '@types'

import type { ContactFormDataType } from '../schema'

export const contactSchemaConstants = {
	name: {
		minLength: 5,
		minErrorMessage() {
			return `Name length should be ${this.minLength} long`
		}
	},
	title: {
		minLength: 5,
		minErrorMessage() {
			return `Title length should be ${this.minLength} long`
		},
		maxLength: 25,
		maxErrorMessage() {
			return `Title maxLenght should not exceed ${this.maxLength}`
		}
	},
	details: {
		minLength: 20,
		minErrorMessage() {
			return `Details minlength should be ${this.minLength} long`
		},
		maxLength: 250,
		maxErrorMessage() {
			return `Details maxLenght should not exceed ${this.maxLength}`
		}
	}
}

export const formInputs: {
	name: keyof ContactFormDataType
	placeholder: string
	type: InputTypeKeys
}[] = [
	{ name: 'name', type: 'text', placeholder: 'Name' },
	{ name: 'title', type: 'text', placeholder: 'Title' },
	{ name: 'email', type: 'email', placeholder: 'Email address' },
	{ name: 'phone', type: 'tel', placeholder: 'Phone number' },
	{ name: 'details', type: 'textarea', placeholder: 'Your message' }
]
