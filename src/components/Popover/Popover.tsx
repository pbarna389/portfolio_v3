type PopoverProps = React.PropsWithChildren & {
	hover: boolean
	className?: string
}

export const Popover = ({ hover, className, children }: PopoverProps) => {
	return (
		<span className={`${className} scale-0 transition ${hover && 'scale-75'}`}>
			{children}
		</span>
	)
}
