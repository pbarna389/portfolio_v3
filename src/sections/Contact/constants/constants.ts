export const contactSchemaConstants = {
	name: {
		minLength: 5,
		minErrorMessage() {
			return `Name length should be ${this.minLength} long`
		}
	},
	details: {
		minLength: 20,
		minErrorMessage() {
			return `Details minlength should be ${this.minLength} long`
		},
		maxLength: 250,
		maxErrorMessage() {
			return `Details maxLenght should be ${this.maxLength} long`
		}
	}
}
