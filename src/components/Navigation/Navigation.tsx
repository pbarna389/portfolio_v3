import { Link } from '@components'

type NavigationProps = {
	desktopMode?: boolean
	open?: boolean
	setState?: () => void
}

export const Navigation = ({
	open = true,
	desktopMode = false,
	setState
}: NavigationProps) => {
	return (
		<div
			className={`fixed gap-4 top-0 left-0 -z-1 scale-x-0 bg-darkBg/90 backdrop-blur-xs	${open && 'scale-x-100'} ${desktopMode && 'hidden z-1 sm:block sm:static sm:bg-transparent sm:backdrop-blur-none scale-x-0 sm:scale-x-100 sm:justify-self-center sm:whitespace-nowrap'}
				`}
		>
			<ul
				className={`flex flex-col gap-4 h-screen w-screen items-center justify-center	sm:flex-row sm:max-h-fit sm:max-w-fit `}
			>
				<li onClick={setState}>
					<Link href="#about" target="" className="cursor-pointer">
						About Me
					</Link>
				</li>
				<li onClick={setState}>
					<Link href="#skills" target="" className="cursor-pointer">
						Skills
					</Link>
				</li>
				<li onClick={setState}>
					<Link href="#projects" target="" className="cursor-pointer">
						Portfolio
					</Link>
				</li>
				<li onClick={setState}>
					<Link href="#contact" target="" className="cursor-pointer">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}
