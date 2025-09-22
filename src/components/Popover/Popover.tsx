type PopoverProps = React.PropsWithChildren & {
	hover: boolean
	className?: string
}

export const Popover = ({ hover, className, children }: PopoverProps) => {
	return (
		<span className={`${className} opacity-0 transition ${hover && 'opacity-100'}`}>
			{children}
		</span>
	)
}
