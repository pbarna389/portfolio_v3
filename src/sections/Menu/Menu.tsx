import { useState } from 'react'

import { Navigation } from '@components'

export const Menu = () => {
	const [open, setOpen] = useState<boolean>(false)

	const handleClick = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div className={`fixed top-8 right-6 h-5 w-5	*:transition sm:hidden`}>
			<button
				type="button"
				className={`z-1	before:absolute before:top-1/7 before:left-1/2 before:h-0.5 before:w-full before:-translate-x-1/2	before:-translate-y-1/2 before:scale-x-75	before:rounded before:bg-darker-600 before:transition	before:content-[""]	after:absolute after:bottom-1/7 after:left-1/2		after:h-0.5 after:w-full after:-translate-x-1/2	after:translate-y-1/2 after:scale-x-75 after:rounded after:bg-darker-600 after:transition after:content-[""] before:hover:bg-darker-300after:hover:bg-darker-300 ${open && `before:top-[50%] before:scale-x-100 before:rotate-45 after:bottom-[50%] after:left-0 after:scale-x-100	after:-rotate-45`}
				`}
				onClick={handleClick}
			>
				<span
					className={`absolute top-1/2 right-1/6 h-0.5 w-1/2 -translate-y-1/2 rounded bg-darker-600 transition hover:bg-darker-300	${open && 'scale-x-0'}`}
				/>
			</button>
			<Navigation open={open} />
		</div>
	)
}
