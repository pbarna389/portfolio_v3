import type { InputTypeKeys } from '@types'

import type { ContactFormDataType } from '../schema'

export const CONTACT_SCHEMA_CONSTANTS = {
	name: {
		minLength: 5,
		minErrorMessage() {
			return `Your given name is should be at least ${this.minLength} letters`
		}
	},
	title: {
		minLength: 5,
		minErrorMessage() {
			return `The title should be at least ${this.minLength} letters`
		},
		maxLength: 25,
		maxErrorMessage() {
			return `Title maxLenght should not exceed ${this.maxLength} letters`
		}
	},
	details: {
		minLength: 20,
		minErrorMessage() {
			return `Your message should be at least ${this.minLength} letters long`
		},
		maxLength: 250,
		maxErrorMessage() {
			return `Your message should not exceed ${this.maxLength} letters`
		}
	}
}

export const FORM_INPUTS: {
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

export const FORM_DEFAULT_VALUES = {
	name: '',
	title: '',
	details: '',
	phone: '',
	email: ''
}
// base value = 1800001
export const BASE_COUNTER_TIME = 1800001
