import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import type { InputTypeKeys } from '@types'

type InputProps<T extends FieldValues> = {
	inputDetails: { name: Path<T>; placeholder: string }
	register: UseFormRegister<T>
	type: InputTypeKeys
	error?: FieldError
}

const inputClassNames =
	'pt-3 pb-3 pl-4 pr-4 bg-[#FFF]/4 focus:bg-[#FFF]/4 active:bg-[#FFF]/4 rounded-sm text-sm w-full'

export const InputFactory = <T extends FieldValues>({
	type,
	register,
	inputDetails,
	error
}: InputProps<T>) => {
	switch (type) {
		case 'text': {
			return (
				<>
					<input
						className={inputClassNames}
						type={type}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p>{error?.message}</p>}
				</>
			)
		}
		case 'email': {
			return (
				<>
					<input
						className={inputClassNames}
						type={type}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p>{error?.message}</p>}
				</>
			)
		}
		case 'tel': {
			return (
				<>
					<input
						className={inputClassNames}
						type={type}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p>{error?.message}</p>}
				</>
			)
		}
		case 'textarea': {
			return (
				<>
					<textarea
						className={`${inputClassNames} resize-none`}
						placeholder={inputDetails.placeholder}
						rows={4}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p>{error?.message}</p>}
				</>
			)
		}
		default: {
			return <p>Invalid Input type</p>
		}
	}
}
