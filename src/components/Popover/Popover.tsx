type PopoverProps = {
	hover: boolean
}

export const Popover = ({ hover }: PopoverProps) => {
	return (
		<span
			className={`absolute p-1 -top-7 -left-4 rounded border-1 border-darker-500 scale-0 transition ${hover && 'scale-75'}`}
		>
			Popover Message
		</span>
	)
}
