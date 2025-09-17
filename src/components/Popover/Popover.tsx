type PopoverProps = {
	hover: boolean
	text: string
	className?: string
}

export const Popover = ({ hover, className, text }: PopoverProps) => {
	return (
		<span className={`${className} scale-0 transition ${hover && 'scale-75'}`}>{text}</span>
	)
}
