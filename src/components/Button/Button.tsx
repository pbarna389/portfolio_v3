type ButtonProps<T extends React.ElementType> = React.PropsWithChildren &
	React.ComponentPropsWithoutRef<T> & {
		className: string
		as?: T
	}

export const Button = <T extends React.ElementType = 'button'>({
	className,
	as,
	children,
	...props
}: ButtonProps<T>) => {
	const Component = as || 'button'

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	)
}
