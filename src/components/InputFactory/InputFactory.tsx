import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import type { InputTypeKeys } from '@types'

type InputProps<T extends FieldValues> = {
	inputDetails: { name: Path<T>; placeholder: string }
	register: UseFormRegister<T>
	type: InputTypeKeys
	error?: FieldError
}

const inputClassNames =
	'pt-3 pb-3 pl-4 pr-4 bg-[#FFF]/4 focus:bg-[#FFF]/4 focus:scale-105 focus:brightness-125 focus:text-md active:bg-[#FFF]/4 focus:outline-none rounded-sm text-sm w-full transition'

const errorClassNames = 'text-red-800 text-sm text-start self-start'

export const InputFactory = <T extends FieldValues>({
	type,
	register,
	inputDetails,
	error
}: InputProps<T>) => {
	switch (type) {
		case 'text': {
			return (
				<div className="w-full">
					<input
						className={inputClassNames}
						type={type}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p className={errorClassNames}>{error?.message}</p>}
				</div>
			)
		}
		case 'email': {
			return (
				<div className="w-full">
					<input
						className={inputClassNames}
						type={type}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p className={errorClassNames}>{error?.message}</p>}
				</div>
			)
		}
		case 'tel': {
			return (
				<div className="w-full">
					<input
						className={inputClassNames}
						type={type}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p className={errorClassNames}>{error?.message}</p>}
				</div>
			)
		}
		case 'textarea': {
			return (
				<div className="w-full">
					<textarea
						className={`${inputClassNames} resize-none`}
						placeholder={inputDetails.placeholder}
						rows={4}
						{...register(inputDetails.name)}
					/>
					{error?.message && <p className={errorClassNames}>{error?.message}</p>}
				</div>
			)
		}
		default: {
			return <p>Invalid Input type</p>
		}
	}
}
